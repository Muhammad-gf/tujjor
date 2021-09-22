<template>
    <header
        class="header"
        :class="stickNavbar.isSticky ? stickNavbar.stickyClass : ''"
    >
        <div class="header-bottom ">
            <div
                class="container d-flex justify-content-between w-100 container-bottom"
            >
                <div class="header-bottom-right">
                    <div
                        class="logo-tujjor"
                        :class="
                            searchActive.active
                                ? searchActive.neighbourClass
                                : ''
                        "
                    >
                        <router-link :to="{ name: 'index___' + $i18n.locale }">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="141"
                                height="61"
                                viewBox="0 0 141 61"
                                fill="none"
                            >
                                <path
                                    d="M22.8819 16.7093C23.0097 16.5853 23.1337 16.4612 23.2615 16.3372C23.4494 16.0742 23.7463 15.9802 24.0093 15.8299L23.9943 15.8412C24.3926 15.4353 24.9563 15.4579 25.4449 15.285L25.4298 15.2963C26.2679 14.9768 27.1021 14.9881 27.9402 15.2888L27.9289 15.2812C28.4099 15.4691 28.9774 15.4316 29.3795 15.8299L29.3719 15.8224C30.6421 16.4349 31.1419 17.4158 31.1231 18.8513C31.063 23.5488 31.1231 28.2462 31.0856 32.9474C31.0743 34.2326 31.2246 35.4389 31.8973 36.5513L31.8898 36.54C32.1115 36.8782 32.5061 37.0887 32.6113 37.5133C32.7278 37.7238 32.8856 37.8966 33.1111 37.9944C33.4381 38.0808 33.6372 38.3476 33.8928 38.5393L33.8815 38.528C35.8695 39.5727 37.8273 39.5351 39.7514 38.3551C39.9055 38.2161 40.0596 38.0808 40.2137 37.9417C40.4993 37.5735 40.8525 37.2615 41.1456 36.9008L41.1344 36.9158C41.326 36.6152 41.4237 36.2582 41.6868 35.9989L41.6755 36.0101C42.1753 34.8602 42.2129 33.6501 42.2091 32.4138C42.1866 27.7802 42.1979 23.1467 42.2016 18.5131C42.2016 17.9494 42.164 17.3707 42.5699 16.8934L42.5661 16.8972C42.8555 16.3748 43.3252 16.0704 43.8476 15.8224L43.8326 15.8337C44.2535 15.4391 44.8134 15.424 45.3282 15.2812C45.3658 15.3188 45.4034 15.3188 45.441 15.2775C46.2828 14.9731 47.1245 14.9768 47.9626 15.2888L47.9475 15.2775C48.4323 15.4654 49.0186 15.3977 49.3906 15.86C49.7889 16.2095 50.1835 16.5552 50.5819 16.9047C50.9727 17.194 50.9389 17.6225 50.9389 18.0321C50.9426 23.3872 50.9915 28.746 50.9201 34.1011C50.8825 36.8294 49.9242 39.2833 48.1354 41.3803L48.143 41.3728C47.8761 41.6659 47.7747 42.1056 47.3575 42.2634C46.9968 42.6016 46.5984 42.906 46.3504 43.3494C46.14 43.5787 45.8731 43.7328 45.6101 43.8981L45.6176 43.8906C45.4748 44.2025 45.1291 44.2551 44.8886 44.4355L44.8961 44.428C44.0468 45.0067 43.1824 45.5629 42.1903 45.8823L42.1979 45.8785C41.093 46.4949 39.8604 46.7542 38.6428 46.9383C36.7714 47.2239 34.8999 47.0172 33.0585 46.5963C32.9119 46.5625 32.7729 46.5136 32.6602 46.4084L32.6714 46.4159C31.7244 46.1604 30.7812 45.8973 29.9657 45.3224L29.9732 45.3299C28.9097 44.815 27.9289 44.1762 27.0796 43.3457L27.0871 43.3532C26.4558 42.8947 25.8958 42.3724 25.4674 41.7147L25.4787 41.7222C25.2119 41.5531 25.1104 41.2525 24.9037 41.0345C24.7797 40.8504 24.6595 40.6663 24.5354 40.4821C24.0619 39.8808 23.7463 39.1969 23.4644 38.4942L23.4682 38.4979C22.6715 37.0774 22.3972 35.5216 22.3896 33.9282C22.3671 28.7385 22.3784 23.5488 22.3821 18.359C22.3633 17.7615 22.3821 17.1602 22.8819 16.7093Z"
                                    fill="#F7931F"
                                />
                                <path
                                    d="M77.0829 58.122C76.9176 58.2836 76.756 58.4452 76.5906 58.603C76.29 59.0803 75.7977 59.3095 75.3317 59.5688L75.3392 59.5575C75.0536 59.8957 74.6252 59.9483 74.2532 60.1099L74.2607 60.0987C71.927 60.963 69.5933 61.3876 67.2634 60.0874L67.2822 60.0987C67.0078 60.0085 66.835 59.8168 66.726 59.5575L66.7373 59.5726C66.478 59.3133 66.2675 59.0239 66.1849 58.6594L66.1961 58.6669C65.2754 56.7015 66.2976 54.1122 68.1615 53.6538L68.154 53.6613C68.5749 53.2892 69.0935 53.3832 69.5858 53.3794C69.924 53.3757 70.2021 53.2028 70.5103 53.1201L70.5065 53.1314C70.6606 52.9172 70.9049 52.7894 71.0514 52.5677L71.0439 52.579C71.4385 51.4441 71.664 50.2791 71.664 49.0728C71.6602 38.8361 71.664 28.6032 71.6602 18.3665C71.6602 17.8554 71.6264 17.3406 71.927 16.8859C72.0473 16.7093 72.1675 16.5326 72.2878 16.3523C72.9191 15.7585 73.6707 15.4203 74.52 15.2812C74.5538 15.3226 74.5914 15.3226 74.6252 15.2812C75.5271 14.9768 76.4291 14.9731 77.331 15.285L77.3197 15.2737C77.8759 15.424 78.4922 15.3977 78.9469 15.8337L78.9319 15.8224C79.1874 15.9877 79.5181 16.0516 79.6684 16.3598L79.6609 16.3523C80.1457 16.7356 80.311 17.2429 80.311 17.8479C80.3073 28.6145 80.3223 39.381 80.2922 50.1476C80.2885 51.8575 79.8488 53.511 79.1122 55.0705L79.1235 55.0592C78.9657 55.435 78.9056 55.8597 78.5749 56.1491L78.5824 56.1415C78.3757 56.4347 78.293 56.7992 78.0224 57.051L78.0337 57.0359C77.7406 57.4155 77.5752 57.9153 77.0829 58.122Z"
                                    fill="#F7931F"
                                />
                                <path
                                    d="M64.885 52.9247C64.8474 52.9585 64.8436 52.9924 64.8812 53.0299C64.6708 53.5824 64.7008 54.2137 64.3326 54.7135L64.3438 54.6985C64.0056 55.6267 63.6749 56.5624 62.8895 57.2313C62.4724 57.6936 62.0552 58.1558 61.6381 58.6218C61.33 59.0878 60.894 59.3771 60.383 59.5763L60.3905 59.5688C60.0936 59.8845 59.6689 59.9408 59.3007 60.1137L59.3082 60.1062C57.324 60.9329 55.3059 61.1208 53.2052 60.5384C51.4728 60.0573 50.74 57.9717 50.9655 56.6113C51.1384 55.5591 51.4841 54.5857 52.4912 54.0145L52.4762 54.0258C52.6641 53.7891 52.9572 53.7628 53.209 53.6538L53.1977 53.665C53.4871 53.4133 53.8629 53.3644 54.2011 53.387C55.1744 53.4546 55.8659 53.0863 56.2905 52.2145L56.2755 52.2295C56.5386 51.5944 56.5912 50.9217 56.6137 50.2453C56.625 49.9259 56.5724 49.5914 56.8091 49.3171C56.8242 49.0803 56.858 48.8398 56.858 48.6031C56.8617 38.4754 56.8617 28.3439 56.858 18.2162C56.858 17.9795 56.8317 17.7389 56.8166 17.5022C57.0045 16.698 57.4442 16.1042 58.2372 15.8111C58.6129 15.3339 59.2067 15.4503 59.699 15.285L59.6802 15.2925C60.5784 14.9956 61.4728 14.9543 62.3709 15.2925L62.3596 15.2812C62.9158 15.4316 63.5284 15.4128 63.9906 15.8337L63.9756 15.8224C65.0466 16.3147 65.4675 17.1038 65.4637 18.3177C65.4337 28.5656 65.4149 38.8173 65.46 49.0653C65.4675 50.3843 65.2833 51.6696 64.885 52.9247Z"
                                    fill="#F7931F"
                                />
                                <path
                                    d="M127.47 19.4187C127.522 19.3511 127.575 19.2835 127.627 19.2158C127.789 19.0693 127.8 18.81 128.014 18.7047L128.003 18.7123C128.311 18.2387 128.702 17.8366 129.085 17.427C129.138 17.3744 129.191 17.318 129.247 17.2654C129.495 17.0851 129.717 16.8709 129.984 16.713L129.98 16.7168C130.326 16.2996 130.803 16.0742 131.265 15.8261L131.25 15.8374C131.551 15.5255 131.953 15.4203 132.344 15.2812L132.329 15.2925C133.024 14.9393 133.742 14.6875 134.546 14.7138C135.324 14.7401 136.105 14.7514 136.883 14.71C137.552 14.6762 138.12 14.8603 138.616 15.2888L138.601 15.2775C139.258 15.6345 139.608 16.2358 139.875 16.8972L139.867 16.8859C140.472 18.2688 140.491 19.5991 139.484 20.8242C139.333 20.8731 139.315 20.9933 139.326 21.1286C139.247 21.4405 139.048 21.6322 138.743 21.7186C138.646 21.7938 138.548 21.8727 138.45 21.9479C138.293 22.256 137.943 22.1245 137.71 22.2673L137.718 22.2598C137.394 22.5717 136.988 22.4514 136.616 22.4552C135.35 22.4777 134.072 22.3575 132.843 22.8084L132.851 22.8009C132.682 23.0752 132.362 23.0414 132.118 23.1654L132.129 23.1542C131.874 23.4097 131.573 23.5938 131.239 23.7216C131.085 23.9358 130.942 24.1613 130.664 24.2365L130.671 24.2252C130.506 24.4469 130.288 24.616 130.078 24.7851C129.92 24.9655 129.766 25.1421 129.608 25.3225C129.503 25.6758 129.311 25.9801 129.044 26.2319L129.055 26.2169C127.725 28.6408 127.518 31.2826 127.537 33.9771C127.556 37.115 127.518 40.2566 127.556 43.3945C127.567 44.2701 127.278 44.894 126.538 45.3299L126.545 45.3224C126.357 45.6944 125.955 45.7132 125.636 45.8673L125.643 45.8598C124.024 46.5738 122.404 46.5512 120.784 45.871C120.668 45.8147 120.551 45.7545 120.435 45.6982C120.183 45.5253 119.935 45.3449 119.721 45.1194L119.739 45.1307C119.39 45.0142 119.36 44.6572 119.183 44.4092L119.195 44.4167C118.879 44.0747 118.898 43.6538 118.898 43.2329C118.898 34.8452 118.898 26.4574 118.898 18.0659C118.898 17.6412 118.901 17.2241 119.21 16.8821L119.195 16.9009C119.785 15.8524 120.754 15.4165 121.889 15.2587L121.878 15.2662C122.72 15.0107 123.558 14.8641 124.377 15.3376C124.583 15.4879 124.82 15.4541 125.053 15.4466C125.32 15.548 125.639 15.533 125.827 15.8036L125.82 15.7961C126.053 15.9915 126.421 16.014 126.534 16.3598L126.523 16.341C127.304 17.0099 127.034 17.9231 127.113 18.7649C127.124 19.0166 126.801 19.539 127.47 19.4187Z"
                                    fill="#F7931F"
                                />
                                <path
                                    d="M72.1116 6.62665C72.059 6.56653 72.0027 6.50264 71.9501 6.44251C70.8941 4.73264 70.9467 3.28207 72.1229 1.75634C72.2995 1.57971 72.4762 1.40309 72.6528 1.22646C74.3326 -0.179013 76.2041 -0.27672 78.1883 0.429777C78.3574 0.489904 78.5302 0.55379 78.5753 0.756719C78.9173 1.03481 79.2593 1.3129 79.6013 1.59474C80.21 2.04194 80.4092 2.7071 80.5708 3.39481L80.5633 3.38353C80.8113 3.92092 80.8752 4.46207 80.5708 5.00321C80.5295 5.03704 80.5295 5.07086 80.5633 5.1122C80.3002 6.11181 79.8606 6.98366 78.906 7.50602C78.8572 7.54359 78.8083 7.57742 78.7632 7.615C78.6279 7.93442 78.2935 7.92315 78.0417 8.05092L78.0492 8.0434C76.6738 8.74614 75.2984 8.7499 73.9267 8.03589L73.9418 8.04716C73.5735 7.98328 73.3067 7.73149 73.0173 7.52856C72.8858 7.40831 72.758 7.28805 72.6265 7.1678C72.4236 7.01372 72.2507 6.83334 72.1116 6.62665Z"
                                    fill="#F7931F"
                                />
                                <path
                                    d="M57.1512 6.60786C57.0347 6.43124 56.922 6.25837 56.8055 6.08175C55.7946 4.16894 56.3057 2.28621 58.1283 0.892002C59.5751 -0.216596 62.0403 -0.295513 63.63 0.689073L63.6224 0.681557C63.8066 0.813085 64.0734 0.835633 64.1598 1.09117C64.3853 1.31665 64.6145 1.54589 64.84 1.77137C66.0877 3.04531 66.1102 5.19862 64.8926 6.60786L64.8964 6.6041C64.5995 7.03251 64.2651 7.42334 63.7916 7.67512L63.8066 7.66385C63.63 7.90811 63.3256 7.91939 63.0851 8.04716L63.0926 8.0434C61.4654 8.83257 59.9058 8.71608 58.4139 7.69015L58.4177 7.69391C58.196 7.48722 57.8352 7.45716 57.7037 7.13397L57.7112 7.14149C57.4556 7.04002 57.2865 6.84085 57.1512 6.60786Z"
                                    fill="#F7931F"
                                />
                                <path
                                    d="M89.7773 43.0225C90.2358 43.1991 90.574 43.5261 90.8709 43.9056C90.3185 43.8417 89.9765 43.5185 89.7773 43.0225Z"
                                    fill="#F7931F"
                                />
                                <path
                                    d="M90.8633 43.9019C91.1564 44.0146 91.4157 44.1762 91.5961 44.4393C91.2504 44.4017 90.9121 44.3491 90.8633 43.9019Z"
                                    fill="#F7931F"
                                />
                                <path
                                    d="M91.5928 44.4317C91.8333 44.4656 92.0174 44.5896 92.1452 44.7963C91.8633 44.8188 91.5928 44.8301 91.5928 44.4317Z"
                                    fill="#F7931F"
                                />
                                <path
                                    d="M113.825 26.8708C113.792 25.2436 113.382 23.6878 112.473 22.3011L112.48 22.3086C112.318 21.7412 111.984 21.2789 111.582 20.8618C111.255 20.223 110.774 19.7156 110.237 19.2534C110.139 19.1557 110.041 19.0542 109.947 18.9565C109.545 18.5544 109.192 18.0922 108.673 17.8179L108.681 17.8291C108.576 17.6037 108.327 17.5698 108.151 17.4458C107.824 17.1489 107.448 16.9235 107.057 16.7318L107.072 16.7431C106.49 16.2771 105.813 15.999 105.099 15.8149C104.679 15.4541 104.126 15.4616 103.638 15.2888L103.653 15.3C101.747 14.5522 99.7481 14.6424 97.7827 14.8002C97.125 14.8528 96.3546 14.8829 95.7383 15.2925L95.7496 15.2812C95.2084 15.4804 94.6034 15.4842 94.1186 15.8412L94.1337 15.8299C93.4873 16.0479 92.8635 16.3147 92.3148 16.7356L92.3298 16.7243C92.0405 16.9235 91.6797 17.0099 91.4317 17.273C91.1574 17.412 90.8943 17.5698 90.7064 17.8216L90.7139 17.8103C89.8007 18.4567 89.083 19.2985 88.3389 20.1177C88.2825 20.1816 88.2262 20.2455 88.1698 20.3094C87.9819 20.4484 87.9368 20.6852 87.809 20.8618L87.8128 20.8543C87.3693 21.4105 86.9372 21.9742 86.738 22.6731L86.7493 22.6581C86.0916 23.7404 85.7497 24.9354 85.5618 26.1681C85.2235 28.3665 85.419 30.5837 85.3701 32.7896C85.2912 36.5626 86.6553 39.7531 89.2333 42.4663C89.4174 42.6505 89.6016 42.8346 89.782 43.0187C90.1314 43.3307 90.4734 43.6463 90.8718 43.8981C91.0296 44.1987 91.3603 44.2589 91.6046 44.4355C91.7361 44.6309 91.9616 44.6798 92.1495 44.7925L92.1344 44.785C92.7282 45.127 93.2919 45.5178 93.9232 45.8034C96.3246 46.8932 98.8462 47.2615 101.443 46.9458C102.702 46.7917 103.964 46.5136 105.099 45.8673L105.088 45.8786C105.464 45.7207 105.885 45.6531 106.182 45.3374L106.174 45.3449C106.415 45.2209 106.712 45.2059 106.892 44.9691C107.546 44.6159 108.181 44.2438 108.7 43.7027L108.684 43.714C109.402 43.2442 109.951 42.5979 110.515 41.9665C110.699 41.7899 110.695 41.4667 110.977 41.3652C111.698 40.7339 112.1 39.8921 112.499 39.0503C113.348 37.7163 113.814 36.2507 113.837 34.6798C113.867 32.0793 113.878 29.4751 113.825 26.8708ZM105.291 34.1161C105.024 37.5622 101.623 40.0951 98.3388 39.2495C96.0277 38.6558 94.6109 37.006 94.1976 34.7362C93.7241 32.1395 93.7579 29.4751 94.1825 26.867C94.626 24.1575 97.3392 22.1433 100.056 22.3161C102.567 22.474 105.122 24.9956 105.295 27.5585C105.366 28.6333 105.306 29.7156 105.306 30.7941H105.302C105.302 31.8989 105.374 33.0113 105.291 34.1161Z"
                                    fill="#F7931F"
                                />
                                <path
                                    d="M1.31156 41.7185C1.19131 41.4817 1.0673 41.2412 0.947041 41.0045C0.135321 38.8361 0.00379267 36.5851 0.0113086 34.2928C0.0376143 24.4619 0.0376143 14.6311 3.47072e-05 4.80028C-0.00372325 3.63532 0.296914 2.75595 1.2815 2.13213C1.70615 1.95551 2.12704 1.77513 2.54793 1.5985C3.67908 1.35048 4.81398 1.36927 5.94513 1.59099C6.79443 1.95551 7.63997 2.32755 8.27506 3.0378C8.44041 3.49251 8.48551 3.96226 8.48551 4.44704C8.47424 7.73525 8.50054 11.0272 8.46672 14.3154C8.4592 15.0445 8.63583 15.3038 9.40997 15.2887C11.8639 15.2437 14.3141 15.2737 16.7681 15.2775C17.4896 15.6082 17.8165 16.2771 18.181 16.9159C18.3802 17.8592 18.4065 18.8024 18.181 19.7494C17.8729 20.3733 17.5046 20.9482 16.9259 21.3616C14.4381 21.3766 11.9503 21.4142 9.46634 21.3917C8.75608 21.3842 8.4592 21.542 8.46672 22.3312C8.50054 26.8257 8.46672 31.3164 8.49302 35.811C8.49678 36.7279 8.55691 37.6824 9.3799 38.3363C10.0112 39.0015 10.8418 39.0578 11.676 39.0729C12.6869 39.0917 13.6978 39.0541 14.7087 39.0841C15.8924 39.118 16.8996 39.5652 17.6549 40.5084C18.3614 41.9327 18.5456 43.3532 17.6549 44.785C17.0274 45.7921 16.1217 46.2731 14.953 46.2769C12.4351 46.2806 9.91353 46.3896 7.42201 45.8673C6.8771 45.6906 6.3322 45.5178 5.78729 45.3412C5.40398 45.0781 4.97933 44.9165 4.53589 44.7887C4.29914 44.5069 3.97596 44.3641 3.64526 44.2363C3.28449 43.9357 2.92749 43.6388 2.56672 43.3382C2.36379 43.0037 2.12328 42.7068 1.81137 42.4701C1.69487 42.1882 1.55583 41.9177 1.31156 41.7185Z"
                                    fill="#F7931F"
                                />
                            </svg>
                        </router-link>
                    </div>

                    <div
                        class="dropdown-category"
                        :class="
                            searchActive.active
                                ? searchActive.neighbourClass
                                : ''
                        "
                        @click="doVisibleCategory"
                    >
                        <button type="button" id="categoryButton">
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                >
                                    <rect
                                        x="0.5"
                                        y="0.5"
                                        width="3"
                                        height="3"
                                        rx="1.5"
                                        fill="#FB8500"
                                        stroke="#F7931E"
                                    />
                                    <rect
                                        x="6.49902"
                                        y="0.5"
                                        width="3"
                                        height="3"
                                        rx="1.5"
                                        fill="#FB8500"
                                        stroke="#F7931E"
                                    />
                                    <rect
                                        x="0.5"
                                        y="6.5"
                                        width="3"
                                        height="3"
                                        rx="1.5"
                                        fill="#FB8500"
                                        stroke="#F7931E"
                                    />
                                    <rect
                                        x="6.49902"
                                        y="6.5"
                                        width="3"
                                        height="3"
                                        rx="1.5"
                                        fill="#FB8500"
                                        stroke="#F7931E"
                                    />
                                </svg>
                            </span>
                            <b>{{ $t("cat") }}</b>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="6"
                                    viewBox="0 0 10 6"
                                    fill="none"
                                >
                                    <path
                                        d="M1 1L5 5L9 1"
                                        stroke="#F7931E"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>

                    <div
                        class="header-search"
                        :class="
                            searchActive.active ? searchActive.searchClass : ''
                        "
                        @keypress="searchByTxt"
                    >
                        <input
                            type="text"
                            :placeholder="$t('search')"
                            v-model="searchTxt"
                            id="search-id"
                        />
                        <button @click="searchByTxt">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M8.71429 15.7857C12.9748 15.7857 16.4286 12.6773 16.4286 8.84286C16.4286 5.00842 12.9748 1.9 8.71429 1.9C4.4538 1.9 1 5.00842 1 8.84286C1 12.6773 4.4538 15.7857 8.71429 15.7857Z"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M14.5 14.05L19 18.1"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>
                    </div>

                    <div
                        :class="
                            searchActive.active
                                ? searchActive.neighbourClass
                                : ''
                        "
                    >
                        <nuxt-link
                            :to="{ name: 'favourite___' + $i18n.locale }"
                            class="header__item basket"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="23"
                                viewBox="0 0 24 23"
                                fill="none"
                            >
                                <path
                                    d="M23.2243 8.09896L16.0296 7.04962L12.8133 0.506195C12.7255 0.32704 12.581 0.182009 12.4024 0.0938536C11.9547 -0.127957 11.4106 0.0568852 11.1868 0.506195L7.97055 7.04962L0.77582 8.09896C0.577461 8.12739 0.396105 8.22124 0.257255 8.36342C0.0893918 8.53657 -0.0031083 8.76951 7.97568e-05 9.01106C0.00326781 9.25261 0.101883 9.48301 0.274257 9.65163L5.47974 14.7448L4.24992 21.9365C4.22108 22.1038 4.23953 22.2759 4.30317 22.4332C4.36681 22.5905 4.47311 22.7268 4.60999 22.8266C4.74688 22.9263 4.90889 22.9856 5.07764 22.9977C5.24639 23.0098 5.41514 22.9742 5.56475 22.8949L12.0001 19.4995L18.4354 22.8949C18.6111 22.9887 18.8151 23.02 19.0106 22.9859C19.5037 22.9006 19.8352 22.4314 19.7502 21.9365L18.5204 14.7448L23.7259 9.65163C23.8675 9.51229 23.9611 9.33029 23.9894 9.13123C24.0659 8.63358 23.7202 8.17289 23.2243 8.09896Z"
                                    fill="#FB8500"
                                />
                            </svg>
                        </nuxt-link>
                    </div>

                    <div
                        :class="
                            searchActive.active
                                ? searchActive.neighbourClass
                                : ''
                        "
                    >
                        <nuxt-link
                            :to="{ name: 'basket___' + $i18n.locale }"
                            class=" header__item basket"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="21"
                                height="24"
                                viewBox="0 0 21 24"
                                fill="none"
                            >
                                <path
                                    d="M10.4426 1.66086C9.67089 1.66086 8.93077 1.96765 8.38508 2.51373C7.83938 3.05982 7.53281 3.80047 7.53281 4.57275V7.48463H6.07791V4.57275C6.07791 3.41433 6.53776 2.30335 7.3563 1.48423C8.17485 0.665098 9.28503 0.204918 10.4426 0.204918C11.6002 0.204918 12.7104 0.665098 13.5289 1.48423C14.3475 2.30335 14.8073 3.41433 14.8073 4.57275V7.48463H13.3524V4.57275C13.3524 3.80047 13.0459 3.05982 12.5002 2.51373C11.9545 1.96765 11.2144 1.66086 10.4426 1.66086ZM6.07791 7.48463H3.69187C3.16937 7.48475 2.66426 7.67245 2.26833 8.01363C1.87239 8.35481 1.61192 8.82681 1.53424 9.34387L0.0400561 19.3214C-0.0373626 19.8392 -0.00228232 20.3675 0.142904 20.8704C0.28809 21.3733 0.539966 21.8389 0.881348 22.2356C1.22273 22.6322 1.64559 22.9505 2.12107 23.1687C2.59656 23.3869 3.11348 23.4999 3.63658 23.5H17.2472C17.7704 23.5001 18.2875 23.3873 18.7632 23.1691C19.2388 22.951 19.6619 22.6328 20.0034 22.2361C20.345 21.8395 20.597 21.3737 20.7422 20.8707C20.8875 20.3677 20.9226 19.8393 20.8452 19.3214L19.3495 9.34387C19.2719 8.82706 19.0116 8.35525 18.616 8.0141C18.2204 7.67296 17.7156 7.4851 17.1934 7.48463H14.8073V9.66854C14.8073 9.86162 14.7307 10.0468 14.5943 10.1833C14.4578 10.3198 14.2728 10.3965 14.0799 10.3965C13.887 10.3965 13.7019 10.3198 13.5655 10.1833C13.4291 10.0468 13.3524 9.86162 13.3524 9.66854V7.48463H7.53281V9.66854C7.53281 9.86162 7.45617 10.0468 7.31975 10.1833C7.18332 10.3198 6.99829 10.3965 6.80536 10.3965C6.61243 10.3965 6.4274 10.3198 6.29098 10.1833C6.15455 10.0468 6.07791 9.86162 6.07791 9.66854V7.48463Z"
                                    fill="#FB8500"
                                />
                            </svg>
                            <span class="basket-count" v-if="countBasket > 0">
                                {{ countBasket }}
                            </span>
                        </nuxt-link>
                    </div>

                    <div
                        class="person__box"
                        :class="
                            searchActive.active
                                ? searchActive.neighbourClass
                                : ''
                        "
                        @click="doVisiblePerson"
                    >
                        <button
                            style="border:none; outline:none; background-color:inherit"
                            id="personBox"
                        >
                            <span class="header__item ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="25"
                                    viewBox="0 0 24 25"
                                    fill="none"
                                >
                                    <path
                                        d="M5.9215 5.92105C5.9215 9.18553 8.53228 11.8421 11.7405 11.8421C14.9487 11.8421 17.5594 9.18553 17.5594 5.92105C17.5594 2.65658 14.9487 0 11.7405 0C8.53228 0 5.9215 2.65658 5.9215 5.92105ZM22.0853 25H23.3784V23.6842C23.3784 18.6066 19.3168 14.4737 14.3267 14.4737H9.15426C4.16288 14.4737 0.102539 18.6066 0.102539 23.6842V25H22.0853Z"
                                        fill="#FB8500"
                                    />
                                </svg>
                            </span>
                        </button>

                        <div class="person__dropdown" v-if="isVisiblePerson">
                            <div class="person__logIn" v-if="loggedIn">
                                <div class="info">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 0.375C8.09636 0.375 6.23546 0.939497 4.65264 1.99711C3.06982 3.05471 1.83616 4.55793 1.10766 6.31667C0.37917 8.07541 0.188563 10.0107 0.559946 11.8777C0.931329 13.7448 1.84802 15.4598 3.1941 16.8059C4.54018 18.152 6.25519 19.0687 8.12226 19.4401C9.98933 19.8114 11.9246 19.6208 13.6833 18.8923C15.4421 18.1638 16.9453 16.9302 18.0029 15.3474C19.0605 13.7645 19.625 11.9036 19.625 10C19.6221 7.44818 18.6071 5.00172 16.8027 3.19731C14.9983 1.39291 12.5518 0.377911 10 0.375ZM15.4945 16.1366C15.4808 15.2349 15.1134 14.3746 14.4714 13.7411C13.8295 13.1076 12.9644 12.7517 12.0625 12.75H7.9375C7.03563 12.7517 6.17052 13.1076 5.52857 13.7411C4.88661 14.3746 4.51921 15.2349 4.5055 16.1366C3.25877 15.0234 2.37957 13.5577 1.98433 11.9337C1.58909 10.3097 1.69645 8.60392 2.29219 7.04228C2.88794 5.48063 3.94397 4.13677 5.32045 3.18864C6.69693 2.24051 8.32893 1.73283 10.0003 1.73283C11.6718 1.73283 13.3038 2.24051 14.6802 3.18864C16.0567 4.13677 17.1128 5.48063 17.7085 7.04228C18.3042 8.60392 18.4116 10.3097 18.0164 11.9337C17.6211 13.5577 16.7419 15.0234 15.4952 16.1366H15.4945Z"
                                            fill="#565656"
                                        />
                                    </svg>

                                    <span> {{ personName }} </span>
                                </div>
                                <nuxt-link to="/profile" class="links">
                                    <span>> Профиль</span>
                                </nuxt-link>
                                <!-- <nuxt-link to="/my__orders" class="links">
                                    <span>> Заказы</span>
                                </nuxt-link> -->
                                <a class="links" @click="logOut">
                                    <span>> Выйти</span>
                                </a>
                            </div>

                            <div class="person__logOut" v-if="!loggedIn">
                                <nuxt-link
                                    :to="{
                                        name: `auth-register___${$i18n.locale}`
                                    }"
                                    class="links"
                                >
                                    <button class="button_register">
                                        {{ $t("regis") }}
                                    </button>
                                </nuxt-link>
                                <nuxt-link
                                    :to="{
                                        name: `auth-login___${$i18n.locale}`
                                    }"
                                    class="links"
                                >
                                    <button class="button_auth">
                                        {{ $t("log_in") }}
                                    </button>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>

                    <div
                        class="dropdown-language"
                        :class="
                            searchActive.active
                                ? searchActive.neighbourClass
                                : ''
                        "
                        @click="doVisibleLanguage"
                        id="dropdownBox"
                    >
                        <button
                            type="button"
                            class="language__russian"
                            v-if="$i18n.locale == 'ru'"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="43"
                                height="28"
                                viewBox="0 0 43 28"
                                fill="none"
                            >
                                <rect
                                    x="0.37793"
                                    width="42"
                                    height="28"
                                    fill="url(#pattern0)"
                                />
                                <defs>
                                    <pattern
                                        id="pattern0"
                                        patternContentUnits="objectBoundingBox"
                                        width="1"
                                        height="1"
                                    >
                                        <use
                                            xlink:href="#image0"
                                            transform="translate(0 -0.00025) scale(0.001 0.0015)"
                                        />
                                    </pattern>
                                    <image
                                        id="image0"
                                        width="1000"
                                        height="667"
                                        xlink:href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wCEAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSgBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/CABEIApsD6AMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAABggF/9oACAEBAAAAANUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEIAAAAAAAAAAAAAAAAAAAAGLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqgAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/xAAXAQEBAQEAAAAAAAAAAAAAAAAABwQF/9oACAECEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoAAAAAAAAAAKCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcgAAAAAAAAAAkoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAMFBgf/2gAIAQMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAABmgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC8AAAAAAAAAAO4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//xAAWEAEBAQAAAAAAAAAAAAAAAAAVF7D/2gAIAQEAAQIA1L65XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5qXiCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCa1n/8QAHBAAAQQDAQAAAAAAAAAAAAAAAwAGU1aTodKw/9oACAEBAAM/APUvYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYic+pgaUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe/Wt//EABYRAQEBAAAAAAAAAAAAAAAAABQVkP/aAAgBAgEBAgDTMhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCaZ3r169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr17XL/xAAdEQABAwUBAAAAAAAAAAAAAAABAAMFUlORodGQ/9oACAECAQM/APTN+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dg+mkfdG+KPujfFH3Rvij7o3xR90b4o+6N8UfdG+KPujfFH3Rvij7o3xR90b4o+6N8UfdG+KPujfFH3Rvij7o3xR90b4o+6N8UfdG+KPujfFH3Rvij7o3xR90b4o+6N8UfdG+KPujfFH3Rvij7o3xR90b4o+6N8UfdG+KPujfFH3Rvij7o3xR90b4o+6N8UfdG+KPujfFH3Rvij7o3xR90b4o+6N8UfdG+KPujfFH3Rvij7o3xR90b4o+6N8UfdG+KPujfFH3Rvij7o3xR90b4o+6N8UfdG+KPujfFH3Rvij7o3xR90b4o+6N8UfdG+KPujfFH3Rvnrn//xAAWEQEBAQAAAAAAAAAAAAAAAAATFpD/2gAIAQMBAQIA0zZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm0zmpqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqa1y/8QAHREAAQMFAQAAAAAAAAAAAAAAAQADBVJTkaHRkP/aAAgBAwEDPwD0zbqGU3UMpuoZTdQym6hlN1DKbqGU3UMpuoZTdQym6hlN1DKbqGU3UMpuoZTdQym6hlN1DKbqGU3UMpuoZTdQym6hlN1DKbqGU3UMpuoZTdQym6hlN1DKbqGU3UMpuoZTdQym6hlN1DKbqGU3UMpuoZTdQym6hlN1DKbqGU3UMpuoZTdQym6hlN1DKbqGU3UMpuoZTdQym6hlN1DKbqGU3UMpuoZTdQym6hlN1DKbqGU3UMpuoZ9NJSwddUpYOuqUsHXVKWDrqlLB11Slg66pSwddUpYOuqUsHXVKWDrqlLB11Slg66pSwddUpYOuqUsHXVKWDrqlLB11Slg66pSwddUpYOuqUsHXVKWDrqlLB11Slg66pSwddUpYOuqUsHXVKWDrqlLB11Slg66pSwddUpYOuqUsHXVKWDrqlLB11Slg66pSwddUpYOuqUsHXVKWDrqlLB11Slg66pSwddUpYOuqUsHXVKWDrqlLB11Slg66pSwddUpYOuqUsHXVKWDrqlLB11Slg66pSwddUpYOuqUsHXVKWDrqlLB11Slg66pSwddUpYOuqUsHXfXP/9k="
                                    />
                                </defs>
                            </svg>
                            <span>ру</span>
                        </button>

                        <button class="language__uzbek" v-else>
                            <svg
                                width="43"
                                height="28"
                                viewBox="0 0 26 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="0.25"
                                    y="0.25"
                                    width="42"
                                    height="28"
                                    rx="1.75"
                                    fill="white"
                                    stroke="#F5F5F5"
                                    stroke-width="0.5"
                                ></rect>
                                <mask
                                    id="mask0"
                                    mask-type="alpha"
                                    maskUnits="userSpaceOnUse"
                                    x="0"
                                    y="0"
                                    width="42"
                                    height="28"
                                >
                                    <rect
                                        x="0.25"
                                        y="0.25"
                                        width="42"
                                        height="28"
                                        rx="1.75"
                                        fill="white"
                                        stroke="white"
                                        stroke-width="0.5"
                                    ></rect>
                                </mask>
                                <g mask="url(#mask0)">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M0 6.33333H26V0H0V6.33333Z"
                                        fill="#04AAC8"
                                    ></path>
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M0 19H26V12.6667H0V19Z"
                                        fill="#23C840"
                                    ></path>
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M4.33322 5.06666C4.71515 5.06666 5.07015 4.94871 5.36532 4.74647C5.3311 4.74878 5.29658 4.74996 5.26179 4.74996C4.40706 4.74996 3.71417 4.04107 3.71417 3.16662C3.71417 2.29217 4.40706 1.58329 5.26179 1.58329C5.29653 1.58329 5.33101 1.58446 5.36519 1.58677C5.07004 1.38458 4.71509 1.26666 4.33322 1.26666C3.30755 1.26666 2.47607 2.11732 2.47607 3.16666C2.47607 4.216 3.30755 5.06666 4.33322 5.06666ZM7.42843 4.43331C7.42843 4.78309 7.15127 5.06664 6.80938 5.06664C6.46749 5.06664 6.19034 4.78309 6.19034 4.43331C6.19034 4.08352 6.46749 3.79997 6.80938 3.79997C7.15127 3.79997 7.42843 4.08352 7.42843 4.43331ZM9.28562 2.53333C9.62751 2.53333 9.90466 2.24978 9.90466 1.9C9.90466 1.55022 9.62751 1.26666 9.28562 1.26666C8.94373 1.26666 8.66657 1.55022 8.66657 1.9C8.66657 2.24978 8.94373 2.53333 9.28562 2.53333ZM12.3809 1.9C12.3809 2.24978 12.1037 2.53333 11.7619 2.53333C11.42 2.53333 11.1428 2.24978 11.1428 1.9C11.1428 1.55022 11.42 1.26666 11.7619 1.26666C12.1037 1.26666 12.3809 1.55022 12.3809 1.9ZM11.7619 5.06664C12.1037 5.06664 12.3809 4.78309 12.3809 4.43331C12.3809 4.08352 12.1037 3.79997 11.7619 3.79997C11.42 3.79997 11.1428 4.08352 11.1428 4.43331C11.1428 4.78309 11.42 5.06664 11.7619 5.06664ZM9.90466 4.43331C9.90466 4.78309 9.62751 5.06664 9.28562 5.06664C8.94373 5.06664 8.66657 4.78309 8.66657 4.43331C8.66657 4.08352 8.94373 3.79997 9.28562 3.79997C9.62751 3.79997 9.90466 4.08352 9.90466 4.43331Z"
                                        fill="white"
                                    ></path>
                                </g>
                            </svg>
                            <span>uz</span>
                        </button>

                        <div
                            class="dropdown__list__box"
                            v-show="isVisibleDropdownList"
                            @click="changeLanguage"
                        >
                            <button
                                type="button"
                                class="language__russian"
                                v-if="$i18n.locale == 'uz'"
                                @click.prevent="$i18n.setLocale('ru')"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="43"
                                    height="28"
                                    viewBox="0 0 43 28"
                                    fill="none"
                                >
                                    <rect
                                        x="0.37793"
                                        width="42"
                                        height="28"
                                        fill="url(#pattern0)"
                                    />
                                    <defs>
                                        <pattern
                                            id="pattern0"
                                            patternContentUnits="objectBoundingBox"
                                            width="1"
                                            height="1"
                                        >
                                            <use
                                                xlink:href="#image0"
                                                transform="translate(0 -0.00025) scale(0.001 0.0015)"
                                            />
                                        </pattern>
                                        <image
                                            id="image0"
                                            width="1000"
                                            height="667"
                                            xlink:href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wCEAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSgBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/CABEIApsD6AMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAABggF/9oACAEBAAAAANUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEIAAAAAAAAAAAAAAAAAAAAGLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqgAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/xAAXAQEBAQEAAAAAAAAAAAAAAAAABwQF/9oACAECEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoAAAAAAAAAAKCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcgAAAAAAAAAAkoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAMFBgf/2gAIAQMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAABmgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC8AAAAAAAAAAO4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//xAAWEAEBAQAAAAAAAAAAAAAAAAAVF7D/2gAIAQEAAQIA1L65XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5XK5qXiCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCa1n/8QAHBAAAQQDAQAAAAAAAAAAAAAAAwAGU1aTodKw/9oACAEBAAM/APUvYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYicpi2EGInKYthBiJymLYQYic+pgaUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe0aUe/Wt//EABYRAQEBAAAAAAAAAAAAAAAAABQVkP/aAAgBAgEBAgDTMhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCaZ3r169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr17XL/xAAdEQABAwUBAAAAAAAAAAAAAAABAAMFUlORodGQ/9oACAECAQM/APTN+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dgp+g4KfoOCn6Dg+mkfdG+KPujfFH3Rvij7o3xR90b4o+6N8UfdG+KPujfFH3Rvij7o3xR90b4o+6N8UfdG+KPujfFH3Rvij7o3xR90b4o+6N8UfdG+KPujfFH3Rvij7o3xR90b4o+6N8UfdG+KPujfFH3Rvij7o3xR90b4o+6N8UfdG+KPujfFH3Rvij7o3xR90b4o+6N8UfdG+KPujfFH3Rvij7o3xR90b4o+6N8UfdG+KPujfFH3Rvij7o3xR90b4o+6N8UfdG+KPujfFH3Rvij7o3xR90b4o+6N8UfdG+KPujfFH3Rvij7o3xR90b4o+6N8UfdG+KPujfFH3Rvnrn//xAAWEQEBAQAAAAAAAAAAAAAAAAATFpD/2gAIAQMBAQIA0zZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm0zmpqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqa1y/8QAHREAAQMFAQAAAAAAAAAAAAAAAQADBVJTkaHRkP/aAAgBAwEDPwD0zbqGU3UMpuoZTdQym6hlN1DKbqGU3UMpuoZTdQym6hlN1DKbqGU3UMpuoZTdQym6hlN1DKbqGU3UMpuoZTdQym6hlN1DKbqGU3UMpuoZTdQym6hlN1DKbqGU3UMpuoZTdQym6hlN1DKbqGU3UMpuoZTdQym6hlN1DKbqGU3UMpuoZTdQym6hlN1DKbqGU3UMpuoZTdQym6hlN1DKbqGU3UMpuoZTdQym6hlN1DKbqGU3UMpuoZ9NJSwddUpYOuqUsHXVKWDrqlLB11Slg66pSwddUpYOuqUsHXVKWDrqlLB11Slg66pSwddUpYOuqUsHXVKWDrqlLB11Slg66pSwddUpYOuqUsHXVKWDrqlLB11Slg66pSwddUpYOuqUsHXVKWDrqlLB11Slg66pSwddUpYOuqUsHXVKWDrqlLB11Slg66pSwddUpYOuqUsHXVKWDrqlLB11Slg66pSwddUpYOuqUsHXVKWDrqlLB11Slg66pSwddUpYOuqUsHXVKWDrqlLB11Slg66pSwddUpYOuqUsHXVKWDrqlLB11Slg66pSwddUpYOuqUsHXfXP/9k="
                                        />
                                    </defs>
                                </svg>
                                <b>ру</b>
                            </button>

                            <button
                                class="language__uzbek"
                                v-else
                                @click.prevent="$i18n.setLocale('uz')"
                            >
                                <svg
                                    width="43"
                                    height="28"
                                    viewBox="0 0 26 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="0.25"
                                        y="0.25"
                                        width="42"
                                        height="28"
                                        rx="1.75"
                                        fill="white"
                                        stroke="#F5F5F5"
                                        stroke-width="0.5"
                                    ></rect>
                                    <mask
                                        id="mask0"
                                        mask-type="alpha"
                                        maskUnits="userSpaceOnUse"
                                        x="0"
                                        y="0"
                                        width="42"
                                        height="28"
                                    >
                                        <rect
                                            x="0.25"
                                            y="0.25"
                                            width="42"
                                            height="28"
                                            rx="1.75"
                                            fill="white"
                                            stroke="white"
                                            stroke-width="0.5"
                                        ></rect>
                                    </mask>
                                    <g mask="url(#mask0)">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M0 6.33333H26V0H0V6.33333Z"
                                            fill="#04AAC8"
                                        ></path>
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M0 19H26V12.6667H0V19Z"
                                            fill="#23C840"
                                        ></path>
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M4.33322 5.06666C4.71515 5.06666 5.07015 4.94871 5.36532 4.74647C5.3311 4.74878 5.29658 4.74996 5.26179 4.74996C4.40706 4.74996 3.71417 4.04107 3.71417 3.16662C3.71417 2.29217 4.40706 1.58329 5.26179 1.58329C5.29653 1.58329 5.33101 1.58446 5.36519 1.58677C5.07004 1.38458 4.71509 1.26666 4.33322 1.26666C3.30755 1.26666 2.47607 2.11732 2.47607 3.16666C2.47607 4.216 3.30755 5.06666 4.33322 5.06666ZM7.42843 4.43331C7.42843 4.78309 7.15127 5.06664 6.80938 5.06664C6.46749 5.06664 6.19034 4.78309 6.19034 4.43331C6.19034 4.08352 6.46749 3.79997 6.80938 3.79997C7.15127 3.79997 7.42843 4.08352 7.42843 4.43331ZM9.28562 2.53333C9.62751 2.53333 9.90466 2.24978 9.90466 1.9C9.90466 1.55022 9.62751 1.26666 9.28562 1.26666C8.94373 1.26666 8.66657 1.55022 8.66657 1.9C8.66657 2.24978 8.94373 2.53333 9.28562 2.53333ZM12.3809 1.9C12.3809 2.24978 12.1037 2.53333 11.7619 2.53333C11.42 2.53333 11.1428 2.24978 11.1428 1.9C11.1428 1.55022 11.42 1.26666 11.7619 1.26666C12.1037 1.26666 12.3809 1.55022 12.3809 1.9ZM11.7619 5.06664C12.1037 5.06664 12.3809 4.78309 12.3809 4.43331C12.3809 4.08352 12.1037 3.79997 11.7619 3.79997C11.42 3.79997 11.1428 4.08352 11.1428 4.43331C11.1428 4.78309 11.42 5.06664 11.7619 5.06664ZM9.90466 4.43331C9.90466 4.78309 9.62751 5.06664 9.28562 5.06664C8.94373 5.06664 8.66657 4.78309 8.66657 4.43331C8.66657 4.08352 8.94373 3.79997 9.28562 3.79997C9.62751 3.79997 9.90466 4.08352 9.90466 4.43331Z"
                                            fill="white"
                                        ></path>
                                    </g>
                                </svg>
                                <b>uz</b>
                            </button>
                        </div>
                    </div>

                    <nav
                        class="header__navbar"
                        :class="
                            searchActive.active
                                ? searchActive.neighbourClass
                                : ''
                        "
                    >
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarToggleExternalContent"
                            aria-controls="navbarToggleExternalContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            @click.stop="doVisibleCategory"
                        >
                            <span class="navbar-toggler-icon"> </span>
                        </button>
                    </nav>
                </div>
            </div>
        </div>

        <div class="category-dropdown-box" v-show="visibleCategory">
            <div class="container d-flex w-100 row ml-0 mr-0 pl-0">
                <div
                    class="category-dropdown__main col-xl-3 col-lg-4 col-md-4 col-sm-5 col-7 pr-0 ml-0 pl-0"
                >
                    <button
                        class="category-dropdown__main--txt"
                        id="categoryButtonSecond"
                        v-for="category in categoryArray"
                        :key="category._id"
                        @mouseenter="doActiveCategory(category)"
                        @click="doActiveCategory(category)"
                    >
                        {{ category.name[$i18n.locale] }}
                    </button>
                </div>

                <div
                    style="background-color: white"
                    class="col-xl-9 col-lg-8 col-md-8 col-sm-7 col-5 pr-0 pl-0"
                >
                    <div
                        class="category-dropdown__children d-flex flex-wrap align-items-start row mr-0 ml-0"
                    >
                        <span
                            class="category-dropdown__children--txt main-children col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12"
                            v-for="children in childCategory"
                            :key="children._id"
                            @click.stop="
                                searchByCategory(children), doVisibleCategory()
                            "
                        >
                            <b> {{ children.name[$i18n.locale] }} </b>

                            <span
                                class="category-dropdown__child"
                                v-for="child in children.children"
                                :key="child._id"
                                @click.stop="
                                    searchByCategory(child, childCategory),
                                        doVisibleCategory()
                                "
                            >
                                {{ child.name[$i18n.locale] }}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="scroll-to-top-btn" @click="navigateToTop">
            <svg
                xml:space="preserve"
                viewBox="0 0 100 100"
                y="0"
                x="0"
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                version="1.1"
                width="70px"
                height="70px"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                style="width:100%;height:100%;background-size:initial;background-repeat-y:initial;background-repeat-x:initial;background-position-y:initial;background-position-x:initial;background-origin:initial;background-color:initial;background-clip:initial;background-attachment:initial;animation-play-state:paused"
            >
                <g
                    class="ldl-scale"
                    style="transform-origin:50% 50%;transform:rotate(0deg) scale(0.8, 0.8);animation-play-state:paused"
                >
                    <path
                        d="M50 7.5L8.91 48.59v22.026l32.549-30.42V92.5H58.54V40.196l32.55 30.42V48.59z"
                        fill="#323232"
                        id="XMLID_64_"
                        style="fill:rgb(255, 255, 255);animation-play-state:paused"
                    ></path>
                    <metadata
                        xmlns:d="https://loading.io/stock/"
                        style="animation-play-state:paused"
                    >
                        <d:name style="animation-play-state:paused">up</d:name>

                        <d:tags style="animation-play-state:paused"
                            >north,upload,top,direction,way,up,arrow</d:tags
                        >

                        <d:license style="animation-play-state:paused"
                            >by</d:license
                        >

                        <d:slug style="animation-play-state:paused"
                            >m889eu</d:slug
                        >
                    </metadata>
                </g>
                <!-- generated by https://loading.io/ -->
            </svg>
        </div>
    </header>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
    data() {
        return {
            visibleCategory: false,
            categoryArray: [],
            activeLanguage: false,
            isVisibleDropdownList: false,
            isVisiblePerson: false,
            personName: "",
            childCategory: [],
            searchTxt: "",

            stickNavbar: {
                scrollY: 0,
                stickyClass: "sticky",
                isSticky: true
            },

            searchActive: {
                active: false,
                searchClass: "search-active",
                neighbourClass: "display-none"
            },
            basketCount: 0,

            winInnerHeight: "",

            positionData: new Map()
        };
    },
    methods: {
        ...mapActions(["searchProduct", "fetchCountBasket"]),
        ...mapMutations([
            "setSearchBody",
            "pushSearchCategory",
            "setSearchTxt",
            "setSearchMainCategory",
            "setSearchChildCategory",
            "resetSearchSettings",
            "resetSearchCategory",
            "updateCountBasket",
            "updateLoggedIn"
        ]),

        doVisibleCategory() {
            this.visibleCategory = !this.visibleCategory;
        },

        doActiveCategory(obj) {
            this.childCategory = obj.children;
        },

        resetCategory() {
            this.childCategory = [];
        },

        doVisibleLanguage() {
            this.isVisibleDropdownList = !this.isVisibleDropdownList;
        },

        changeLanguage() {
            this.activeLanguage = !this.activeLanguage;
        },

        doVisiblePerson() {
            this.isVisiblePerson = !this.isVisiblePerson;
        },

        async logOut() {
            await this.$auth.logout();
            this.updateLoggedIn();
            this.updateCountBasket(0);
            this.personName = this.$auth.user?.name;
        },

        // search settings
        searchByTxt(event) {
            this.resetSearchSettings();
            // validate is it enter or click
            if (event.key === "Enter" || event.type === "click") {
                const txt = this.searchTxt;
                this.setSearchTxt(txt);
                this.$router.push({
                    name: "search-id___" + this.$i18n.locale,
                    params: { id: txt }
                });
            }
        },

        // search by category
        searchByCategory(obj, mainObj = "") {
            this.resetSearchSettings();
            // validate if is it main category
            if (obj.children.length > 0) {
                obj.children.forEach(item => {
                    this.pushSearchCategory(item._id);
                });
            } else this.pushSearchCategory(obj._id);

            // add main and child category to show on filter page
            if (obj.children.length > 0 || mainObj.length === 0) {
                this.setSearchMainCategory(obj);
            }
            if (obj.children.length === 0 && mainObj.length > 0) {
                const [data] = mainObj.filter(
                    item => item._id === obj.parentId
                );
                this.setSearchMainCategory(data);
                this.setSearchChildCategory(obj);
            }

            this.$router.push({
                name: "search-id___" + this.$i18n.locale,
                params: { id: obj._id }
            });
        },

        // function for sticky nav
        handleScroll() {
            const scrollY = window.scrollY;
            if (this.stickNavbar.scrollY > scrollY || scrollY <= 100) {
                this.stickNavbar.isSticky = true;
            } else if (this.stickNavbar.scrollY < scrollY) {
                this.stickNavbar.isSticky = false;
            }
            this.stickNavbar.scrollY = scrollY;

            if (this.winInnerHeight < scrollY) {
                const scrollBox = document.querySelector(".scroll-to-top-btn");
                scrollBox.style = "display:block";
            }

            if (this.winInnerHeight > scrollY) {
                const scrollBox = document.querySelector(".scroll-to-top-btn");
                scrollBox.style = "display:none";
            }
        },

        // function for animation search poly
        windowCLicked(event) {
            const pathObj = event.composedPath();

            // category tab
            if (
                pathObj[0].id !== "categoryButton" &&
                pathObj[1].id !== "categoryButton" &&
                pathObj[0].id !== "categoryButtonSecond" &&
                this.visibleCategory === true
            ) {
                this.doVisibleCategory();
            }

            // persob tab
            if (
                pathObj[1].id !== "personBox" &&
                pathObj[2].id !== "personBox" &&
                pathObj[3].id !== "personBox" &&
                this.isVisiblePerson === true
            ) {
                this.doVisiblePerson();
            }

            // language tab
            if (
                pathObj[1].id !== "dropdownBox" &&
                pathObj[2].id !== "dropdownBox" &&
                pathObj[3].id !== "dropdownBox" &&
                pathObj[4].id !== "dropdownBox" &&
                this.isVisibleDropdownList === true
            ) {
                this.doVisibleLanguage();
            }
        },

        // window key pressed
        focusOutedFromSearch() {
            this.searchActive.active = false;
        },

        // window key pressed
        focusInToSearch() {
            this.searchActive.active = true;
        },

        setWinHeight() {
            this.winInnerHeight = window.innerHeight;
        },

        navigateToTop() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }
    },

    computed: {
        ...mapGetters(["searchBody", "countBasket", "loggedIn"])
    },

    async mounted() {
        const res = await this.$axios.$get("category/all");
        const token = this.$auth.strategy.token.get();
        this.updateLoggedIn();
        if (!!token) {
            const count = await this.fetchCountBasket(token);
            this.basketCount = count.count;
        }

        this.categoryArray = res.data;
        this.personName = this.$auth.user?.name;

        this.setWinHeight();
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("click", this.windowCLicked);
        window.addEventListener("resize", this.setWinHeight);

        if (window.innerWidth <= 770) {
            // search animations
            const searchInput = document.getElementById("search-id");
            searchInput.addEventListener("focusin", this.focusInToSearch);
            searchInput.addEventListener("focusout", this.focusOutedFromSearch);
        }

        const some_id = document.getElementById("search-id");
        some_id.type = "text";
        some_id.removeAttribute("autocomplete");
    },

    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
        if (window.innerWidth <= 770) {
            const searchInput = document.getElementById("search-id");
            searchInput.removeEventListener("focusin", this.focusInToSearch);
            searchInput.removeEventListener(
                "focusout",
                this.focusOutedFromSearch
            );
        }
    }
};
</script>

<style lang="scss" scoped>
.sticky {
    top: 0 !important;
}
.display-none {
    display: none !important;
}
.search-active {
    margin-right: 20px !important;
}

.header {
    width: 100vw;
    position: fixed;
    top: -81px;
    left: 0;
    z-index: 9999;

    & {
        transition: all 0.2s;

        @media only screen and (max-width: 766px) {
            top: -58px;
        }

        @media only screen and (max-width: 560px) {
            top: -52px;
        }

        @media only screen and (max-width: 400px) {
            top: -47px;
        }
    }

    //  Centering category dropdown menu

    .header-top {
        background-color: #f7931f;
        display: flex;
        height: 60px;
        justify-content: space-between;
        padding-right: 10px;

        .header-top-left {
            display: flex;
            align-items: center;
            .logo-site {
                display: flex;
                align-items: center;
            }
        }
        .header-top-right {
            display: flex;
            align-items: center;
            .email {
                display: flex;
                align-items: center;
                margin-right: 25px;
            }

            .phone__lang__box {
                .phone {
                    display: flex;
                    align-items: center;
                }
                .dropdown-language__top {
                    display: none;
                }
            }
        }
    }
    h6 {
        font-size: 18px;
        line-height: 110%;
        margin-bottom: 0px;
        color: #ffffff;
        margin-left: 5px;
        font-weight: normal;
    }
    .__adress {
        max-width: 180px;
    }
    .header-bottom {
        padding: 10px 0px;
        background: #fcf6f6;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

        .header-bottom-right {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .logo-tujjor {
                padding-right: 15px;
            }
            .dropdown-language {
                display: flex;
                justify-content: center;
                align-items: center;

                position: relative;
                margin: 0 10px;

                button {
                    background: transparent;
                    border: none;

                    b {
                        font-style: normal;
                        font-weight: 500;
                        font-size: 18px;
                        line-height: 27px;

                        color: #000000;
                    }
                }
                .dropdown__list__box {
                    position: absolute;
                    top: 40px;
                    left: -10%;
                    max-width: 80px;

                    background-color: #fcf6f6;
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 14%);
                    padding: 5px;

                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: nowrap;
                }
            }
            .header__item {
                height: 38px;
                width: 38px;
                display: flex;
                justify-content: center;
                align-items: center;

                svg {
                    height: 65%;
                    width: 65%;
                }
            }

            .header__item:hover {
                background-color: #e2e2e2;
                border-radius: 50%;
                cursor: pointer;
            }

            .basket {
                position: relative;
                cursor: pointer;

                .basket-count {
                    position: absolute;
                    top: 0;
                    right: -1px;
                    background: #023047;
                    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);
                    display: inline-block;
                    padding: 2px 6px;
                    border-radius: 15px;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 9.63934px;
                    line-height: 14px;

                    color: #ffffff;
                }
            }

            .dropdown-category {
                position: relative;

                transition: all 2s;
                button {
                    padding: 0px 12px;
                    background: transparent;
                    display: inline-flex;
                    height: 34px;
                    align-items: center;
                    border: 1px solid #f7931e;
                    box-sizing: border-box;
                    border-radius: 3px;
                    b {
                        font-weight: normal;
                        font-size: 16px;
                        line-height: 34px;
                        margin: 0px 5px;
                        color: #fb8500;
                    }
                }
                // div.dropdown-content{

                // }
            }

            .header-search {
                margin-left: 10px;
                flex-grow: 1;
                border-radius: 5px;
                overflow: hidden;
                height: 36px;
                width: auto;
                display: flex;

                input {
                    background: #ffffff;
                    border: 1px solid #f7931f;
                    box-sizing: border-box;
                    height: 100%;
                    border-top-left-radius: 5px;
                    border-bottom-left-radius: 5px;
                    padding-left: 10px;
                    font-size: 14px;
                    width: 100%;

                    &:focus {
                        outline: none;
                    }
                }

                button {
                    background: #fb8500;
                    border: 1px solid #fb8500;
                    box-sizing: border-box;
                    height: 100%;
                    display: inline-flex;
                    align-items: center;
                    padding: 9px;
                }
            }

            .header__navbar {
                display: none;
                .navbar-toggler {
                    padding: 0;
                    margin: auto 5px;
                    .navbar-toggler-icon {
                        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28247, 147, 31, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
                    }
                }
            }

            .person__box {
                position: relative;
                cursor: pointer;
                .person__dropdown {
                    position: absolute;
                    top: 40px;
                    left: -50%;

                    .person__logIn {
                        width: 194px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;

                        background: white;

                        .info {
                            width: 100%;
                            padding: 9px 14px;
                            background-color: #e9e4e4;
                            display: flex;
                            justify-content: baseline;
                            align-items: center;
                            overflow-x: hidden;

                            span {
                                display: inline-block;
                                margin-left: 10px;
                                font-family: Montserrat, sans-serif;
                                font-size: 14px;
                                line-height: 17px;
                                /* identical to box height */

                                color: #565656;
                            }
                        }

                        .links {
                            width: 100%;
                            margin: 4px 0;
                            padding: 0 14px;
                            span {
                                font-family: Montserrat, sans-serif;

                                font-weight: 500;
                                font-size: 14px;
                                line-height: 17px;
                                /* identical to box height */

                                color: #565656;
                            }
                        }
                    }

                    .person__logOut {
                        width: 173px;
                        height: 94px;
                        padding: 10px;
                        background: white;
                        box-shadow: 0 4px 12px rgb(0 0 0 / 14%);
                        border-radius: 5px;

                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;

                        button {
                            width: 100%;
                            height: 34px;
                            border-radius: 10px;
                        }

                        .button_register {
                            font-family: Montserrat, sans-serif;
                            font-weight: 600;
                            font-size: 14px;
                            line-height: 100%;
                            /* identical to box height, or 14px */
                            background-color: transparent;
                            color: #023047;
                            border: 2px solid #023047;
                        }

                        .button_auth {
                            font-family: Montserrat, sans-serif;
                            font-weight: 600;
                            font-size: 14px;
                            line-height: 100%;
                            /* identical to box height, or 14px */
                            background-color: #f7931e;
                            color: white;
                            border: 2px solid #f7931e;
                        }
                    }
                }
            }
        }
    }

    .scroll-to-top-btn {
        position: fixed;
        bottom: 5%;
        right: 4%;
        border-radius: 50%;
        background-color: #fb8500;
        display: none;

        &:active {
            background-color: #e27700;
        }

        svg:hover {
            cursor: pointer;
        }
    }
}

.category-dropdown-box {
    margin: 0 auto;
    background-color: transparent;
    overflow: hidden;
    border-radius: 0 0 3px 3px;
    max-width: 1200px;
    height: 500px !important;

    // styling scrollbar
    ::-webkit-scrollbar {
        width: 7px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #f7931f;
    }

    ::-webkit-scrollbar-track {
        border-radius: 5px;
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.25);
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: rgba(247, 147, 31, 0.7);
    }

    .container {
        padding: 0;
    }

    .category-dropdown__main {
        flex-shrink: 0;
        width: 248px;
        height: 500px;
        background: #fce3a4;
        overflow-y: scroll;
        padding: 2px 0;

        .category-dropdown__main--txt {
            font-family: Roboto, sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 100%;
            /* identical to box height, or 14px */
            padding: 10px 8px;
            color: #666666;
            width: 100%;
            background-color: transparent;
            border: none;
            outline: none;

            text-align: left;
        }

        .category-dropdown__main--txt:hover,
        .category-dropdown__main--txt:active,
        .category-dropdown__main--txt:focus {
            color: #fb8500;
            background-color: white;
            font-weight: 500;
        }

        .category-dropdown__main--txt,
        .category-dropdown__main--txt:hover {
            cursor: pointer;
        }
    }

    .category-dropdown__children {
        overflow-y: scroll;
        overflow-x: hidden;
        max-height: 500px;
        flex-shrink: 0;
        align-self: flex-start;
        flex-grow: 0;

        .category-dropdown__children--txt {
            display: inline-block;
            width: 230px;
            padding: 10px 0 10px 10px;
            font-family: Roboto, sans-serif;
            font-weight: 400;
            font-size: 13px;
            line-height: 100%;
            /* identical to box height, or 14px */
            color: #666666;

            .category-dropdown__child {
                display: block;
                padding: 2.5px 0;
                font-family: Roboto, sans-serif;
                font-weight: 400;
                font-size: 13px;
                line-height: 100%;
                /* identical to box height, or 14px */
                color: #666666;
            }

            b {
                display: block;
                padding: 5px 0;
                font-family: Roboto, sans-serif;
                font-size: 13px;
                line-height: 100%;
                /* identical to box height, or 14px */
            }

            b:hover,
            .category-dropdown__child {
                cursor: pointer;
            }
            b:hover,
            .category-dropdown__child:hover {
                opacity: 0.7;
            }
        }

        .main-children {
            font-weight: 500;
            color: black;
        }
    }
}

@media only screen and (max-width: 1200px) and (min-width: 765px) {
    header.header {
        .header-bottom {
            .header-bottom-right {
                .dropdown-language {
                    b {
                        display: none;
                    }
                }

                .person__box {
                    .person__dropdown {
                        left: -180%;
                    }
                }
            }
        }

        .scroll-to-top-btn {
            svg {
                width: 55px !important;
                height: 55px !important;
            }
        }
    }
}

@media (max-width: 764px) {
    .header {
        .header-bottom {
            padding: 10px 0;
            .header-bottom-right {
                .logo-tujjor {
                    flex-grow: 0;
                    display: inline-block;
                    width: 74px;
                    height: auto;
                    padding: 0;
                    margin: 0;
                    a {
                        svg {
                            width: 74px;
                            height: auto;
                        }
                    }
                }

                .person__box {
                    .person__dropdown {
                        left: -400%;
                    }
                }
            }
        }

        .dropdown-category {
            margin-left: 10px;
        }

        .dropdown-language {
            display: none !important;
        }
    }
}

@media (max-width: 655px) {
    .header {
        .header-top {
            .header-top-left {
                display: none;
            }
            .header-top-right {
                flex-grow: 1;
                display: flex;
                justify-content: space-between;

                position: relative;
                .email {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translateY(-50%);
                }

                .phone__lang__box {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                }
                h6 {
                    font-size: 15px;
                }
            }
        }

        .scroll-to-top-btn {
            svg {
                width: 40px !important;
                height: 40px !important;
            }
        }
    }
}

@media only screen and (max-width: 560px) {
    .header {
        .header-bottom {
            .header-bottom-right {
                .header-search {
                    height: 30px;
                }

                .dropdown-category {
                    display: none;
                }

                .header__navbar {
                    display: inline-block;
                }

                .header__item {
                    height: 30px;
                    width: 30px;
                }
            }
        }
        .scroll-to-top-btn {
            bottom: 8%;
        }
    }

    .category-dropdown-box {
        height: 100vh !important;

        .category-dropdown__main {
            width: 180px;
            height: 100vh;

            .category-dropdown__main--txt {
                font-size: 13px;
                padding: 8px 12px;
            }
        }

        .category-dropdown__children {
            padding: 3px 0;

            .category-dropdown__children--txt {
                width: 200px;
                padding: 0 12px;
                font-size: 13px;
            }
        }
    }
}

@media only screen and (max-width: 400px) {
    .header {
        .header-bottom {
            .container-bottom {
                padding-left: 8px;
                padding-right: 8px;
            }
            .header-bottom-right {
                .header-search {
                    height: 25px;

                    input {
                        font-size: 12px;
                        padding-left: 6px;
                    }
                }

                .basket {
                    .basket-count {
                        top: -2px;
                        right: -3px;
                        padding: 1px 4px;
                        border-radius: 60px;
                        font-size: 10px;
                        line-height: 14px;

                        text-align: center;
                        vertical-align: middle;
                    }
                }

                .logo-tujjor {
                    width: 60px;
                    a {
                        svg {
                            width: 60px;
                        }
                    }
                }

                .header__item {
                    height: 26px;
                    width: 26px;
                }

                .header__navbar {
                    .navbar-toggler {
                        font-size: 1rem;
                    }
                }
            }
        }

        .scroll-to-top-btn {
            svg {
                width: 35px !important;
                height: 35px !important;
            }
        }
    }
}
</style>
