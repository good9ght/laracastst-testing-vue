<template>
    <div>
        <input type="text" class="coupon-code" v-model='code' @input="validate">
        <p v-if="valid">
            Coupon Redeemed: {{ message }}
        </p>
        <p v-else>
            Invalid Coupon
        </p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            code: '',
            coupons: [
                {
                    code: '20OFF',
                    message: '20% Off!',
                    discount: 50
                },
                {
                    code: 'FREE',
                    message: 'Entirely Free!',
                    discount: 100
                }
            ],
            valid: false
        }
    },
    methods: {
        validate() {
            this.valid = !! this.selectedCoupon;

            if(this.valid) {
                this.$emit('applied', this.selectedCoupon.discount);
            }
        }
    },
    computed: {
        selectedCoupon() {
            return this.coupons.find(coupon => coupon.code === this.code);
        },
        message() {
            return this.selectedCoupon.message;
        }
    }
}
</script>