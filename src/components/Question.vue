<template>
    <div>
        <div>
            <!-- Viewing the question. -->
            <div v-if="!editing">
                <h1 v-text="title" id="title"></h1>
                <div v-text="body" id="body"></div>
                <button id="edit" @click="editing = true">Edit</button>
            </div>
            <div v-else>
                <input type="text" name='title' v-model='form.title'>
                <textarea name="body" id="body" v-model="form.body"></textarea>
                <button @click="cancel" id="cancel">Cancel</button>
                <button @click="update" id="update">Update</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: [ 'question' ],
    data() {
        return {
            title: this.question.title,
            body: this.question.body,
            form: {
                title: this.question.title,
                body: this.question.body
            },
            editing: false
        }
    },
    methods: {
        cancel() {
            this.editing = false;
        },
        update() {
            this.title = this.form.title
            this.body = this.form.body
            this.editing = false;
        }
    }
}
</script>