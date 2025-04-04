<template>
  <div class="service__overview">
    <div class="left">
      <h2 class="heading-2">Обзор сервиса</h2>
      <p class="text">
        Посмотрите видео - убедитесь как просто устроена <br />
        наша система
      </p>
    </div>
    <div class="right">
      <div class="right-image">
        <button class="play_vd">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="43"
            viewBox="0 0 42 43"
            fill="none"
          >
            <g clip-path="url(#clip0_50_1671)">
              <path
                d="M35.8645 14.4443L19.1695 2.19425C17.8656 1.23943 16.3226 0.664393 14.7118 0.532913C13.101 0.401434 11.4853 0.718647 10.0438 1.44938C8.60224 2.18011 7.39126 3.2958 6.5451 4.67275C5.69894 6.0497 5.25068 7.6341 5.25 9.25025V33.7503C5.25029 35.3671 5.69858 36.9523 6.54513 38.3299C7.39168 39.7075 8.60337 40.8235 10.0457 41.5542C11.4881 42.2849 13.1047 42.6017 14.7162 42.4693C16.3276 42.337 17.8709 41.7607 19.1748 40.8045L35.8698 28.5545C36.978 27.7418 37.8792 26.6795 38.5004 25.4536C39.1216 24.2277 39.4453 22.8728 39.4453 21.4985C39.4453 20.1242 39.1216 18.7693 38.5004 17.5434C37.8792 16.3175 36.978 15.2552 35.8698 14.4425L35.8645 14.4443ZM33.7925 25.7318L17.0975 37.9818C16.3153 38.5534 15.3901 38.8974 14.4245 38.9757C13.4589 39.054 12.4904 38.8636 11.6262 38.4256C10.7621 37.9876 10.036 37.3189 9.52841 36.4938C9.02077 35.6686 8.75136 34.7191 8.75 33.7503V9.25025C8.74029 8.27961 9.00462 7.32592 9.51261 6.49877C10.0206 5.67162 10.7517 5.00456 11.6218 4.57425C12.3618 4.19781 13.1802 4.00116 14.0105 4.00025C15.1233 4.0045 16.2054 4.36581 17.0975 5.031L33.7925 17.281C34.4566 17.7687 34.9966 18.4059 35.3688 19.141C35.741 19.8761 35.935 20.6885 35.935 21.5125C35.935 22.3365 35.741 23.1489 35.3688 23.884C34.9966 24.6191 34.4566 25.2563 33.7925 25.744V25.7318Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_50_1671">
                <rect
                  width="42"
                  height="42"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        <img src="/images/video_thumbnail.jpeg" alt="" />
      </div>
    </div>
    <div class="button">
      <button>Попробовать 7 дней бесплатно</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.service__overview {
  width: 100%;
  margin-top: 72px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 2fr 1fr;
  padding: 42px 56px;
  border-radius: 56px;
  background-color: var(--primary-white);
  box-shadow: var(--box-shadow-black);
  gap: 32px;
  @media screen and (max-width: 950px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    padding: 28px 24px;
  }
  .left {
    align-content: end;
    h2 {
      white-space: nowrap;
      margin-bottom: 16px;
      @media screen and (max-width: 950px) {
        white-space: wrap;
      }
    }
    p {
      max-width: 320px;

      @media screen and (max-width: 950px) {
        br {
          display: none;
        }
      }
    }
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      @include button($background-color: var(--primary-green));
      @media screen and (max-width: 950px) {
        width: 100%;
      }
    }
  }
  .right {
    height: 100%;
    background-color: red;
    grid-row: span 2;

    align-content: center;
    &-image {
      position: relative;
      .play_vd {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 106px;
        height: 106px;
        border-radius: 50%;
        background: rgba(40, 40, 40, 0.9);
        cursor: pointer;
        @media screen and (max-width: 500px) {
          width: 72px;
          height: 72px;
        }
      }
    }
  }
}
</style>