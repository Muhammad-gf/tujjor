<template>
    <div>
        <nuxt-link to="/">
            <div class="product-card">
                <div class="img">
                    <img src="@/assets/img/Other/banner.png" alt="" />
                </div>

                <div class="product-info">
                    <div class="brand">
                        <h6>Футболки</h6>

                        <div class="rating">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="15"
                                viewBox="0 0 16 15"
                                fill="none"
                            >
                                <path
                                    d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                                    fill="#F7931E"
                                />
                            </svg>

                            <span>4.5</span>
                        </div>
                    </div>
                    <h4>Мужская кожаная куртка Мужская кожаная куртка</h4>

                    <h5 class="old-price">1580000 so'm</h5>
                    <h5 class="price">1080000 сум</h5>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div.product-card {
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    overflow: hidden;
    &:hover {
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.18);
    }
    div.img {
        img {
            height: 222px;
            width: 100%;
            object-fit: cover;
        }
    }

    div.product-info {
        padding: 5px 15px;
        div.brand {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            h6 {
                font-weight: normal;
                font-size: 14px;
                line-height: 16px;
                margin-bottom: 0px;
                color: #666666;
            }

            div.rating {
                display: flex;
                align-items: center;
                span {
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 14px;
                    margin-left: 2px;
                    color: #565656;
                }
            }
        }

        h4 {
            height: 38px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 15px;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color: #000000;
        }

        h5.old-price {
            text-decoration: line-through;
            font-weight: bold;
            font-size: 14px;
            line-height: 100%;
            margin-bottom: 10px;
            text-decoration-color: #2e2e2e;
            text-decoration-thickness: 1px;
            color: #f7931e;
        }
        h5.price {
            font-weight: bold;
            font-size: 20px;
            line-height: 100%;
            margin-bottom: 10px;
            color: #219ebc;
        }
    }
}
</style>
