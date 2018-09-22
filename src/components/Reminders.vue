<template>
    <div>
        <input type="text" class="new-reminder" v-model="newReminder">
        <button @click='add'>Add Reminder</button>
        <ul v-if="reminders.length > 0">
            <li v-for="reminder in reminders" v-bind:key="reminder">
                {{ reminder }}
                <button class="remove" @click="remove(reminder)">Remove</button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            reminders: [],
            newReminder: ''
        }
    },
    methods: {
        add() {
            this.reminders.push(this.newReminder);
            this.newReminder = '';
        },
        remove(reminder) {
            this.reminders = this.reminders.filter(r => r !== reminder);
        }
    }
}
</script>