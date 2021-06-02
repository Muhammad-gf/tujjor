<template>
    <div class=" faq__question__box">
        <div class="faq__question--title" @click="isVisibleContent">
            <div class="svg__icon " :class="{ 'svg__icon--active': isVisible }">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 15 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M15 9L0 17.6603L0 0.339746L15 9Z" fill="white" />
                </svg>
            </div>
            <h3
                class="faq__question--text "
                :class="{
                    'faq__question--text--active': isVisible
                }"
            >
                {{ faqQuestion }}
            </h3>
        </div>
        <div
            class="faq__question--description "
            :class="{
                'faq__question--description--active': isVisible
            }"
        >
            <span>
                {{ faqDescription }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: ["faqQuestion", "faqDescription"],
    data() {
        return {
            isVisible: false
        };
    },

    methods: {
        isVisibleContent() {
            this.isVisible = !this.isVisible;
        }
    }
};
</script>

<style lang="scss" scoped>
.faq__question__box {
    position: relative;

    .faq__question--title {
        display: flex;
        align-items: center;
        margin: 20px 0;

        &:hover {
            cursor: pointer;
        }

        .svg__icon {
            flex-shrink: 0;
            display: inline-block;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            background-color: #fe9e0d;
            transition: 0.3s;

            position: relative;

            &--active {
                transform: rotate(90deg);
            }
            svg {
                position: absolute;
                top: 15px;
                left: 18px;
            }
        }

        .faq__question--text {
            display: inline-block;
            margin-top: 5px;
            margin-left: 15px;
            font-family: Roboto, sans-serif;
            font-weight: 600;
            font-size: 20px;
            line-height: 130%;
            /* identical to box height, or 26px */
            color: #000000;

            &--active {
                color: #fe9e0d;
            }
        }
    }

    .faq__question--description {
        padding: 20px 20px 30px;
        border-radius: 5px;
        background-color: #f1efed;
        margin: 20px 0 40px 80px;

        position: absolute;
        transform: translateX(-150%);
        opacity: 0;
        visibility: hidden;
        transition: visibility 0.5s linear, opacity 0.5s linear, transform 1.7s;

        &--active {
            position: relative;
            transform: translateX(0);
            opacity: 1;
            visibility: visible;
            left: 0;
        }

        // TEXT FORMATING
        span {
            font-family: Roboto, sans-serif;
            font-size: 16px;
            line-height: 130%;
            /* or 21px */

            color: #666666;
        }
    }
}

@media only screen and (max-width: 560px) {
    .faq__question__box {
        .faq__question--title {
            margin: 25px 0;

            .svg__icon {
                width: 40px;
                height: 40px;

                svg {
                    top: 12px;
                    left: 15px;
                    height: 16px;
                    width: 16px;
                }
            }

            .faq__question--text {
                margin-left: 10px;
                font-size: 16px;
            }
        }

        .faq__question--description {
            padding: 15px 15px 20px;
            margin: 0;

            // TEXT FORMATING
            span {
                font-size: 14px;
            }
        }
    }
}
</style>
