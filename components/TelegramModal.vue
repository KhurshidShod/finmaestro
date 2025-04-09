<template>
  <div class="modal">
    <div class="container">
        <div class="modal__wrapper">
      <svg
        @click="$emit('toggleModal', false)"
        class="close"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M13.9859 12.0015L19.5837 6.40814C19.7148 6.27837 19.8191 6.12407 19.8905 5.95405C19.9619 5.78404 19.9991 5.60163 20 5.41724C20.0009 5.23286 19.9654 5.05011 19.8955 4.87943C19.8257 4.70875 19.7229 4.55348 19.5931 4.42249C19.4632 4.2915 19.3088 4.18735 19.1386 4.11599C18.9685 4.04463 18.7859 4.00746 18.6014 4.00659C18.4169 4.00573 18.234 4.04119 18.0631 4.11095C17.8923 4.18071 17.7369 4.2834 17.6058 4.41317L12.008 10.0065L6.41008 4.41317C6.14532 4.14862 5.78622 4 5.41179 4C5.03736 4 4.67827 4.14862 4.4135 4.41317C4.14874 4.67772 4 5.03652 4 5.41065C4 5.78478 4.14874 6.14359 4.4135 6.40814L10.0114 12.0015L4.4135 17.5949C4.15143 17.857 4.00422 18.2125 4.00422 18.583C4.00422 18.9536 4.15143 19.309 4.4135 19.5712C4.68005 19.8269 5.03301 19.9733 5.40246 19.9814C5.58801 19.9861 5.77265 19.954 5.94564 19.8867C6.11863 19.8195 6.2765 19.7186 6.41008 19.5898L12.008 13.9965L17.6058 19.5898C17.868 19.8521 18.2237 19.9997 18.5948 20C18.9642 19.992 19.3172 19.8456 19.5837 19.5898C19.8458 19.3276 19.993 18.9722 19.993 18.6017C19.993 18.2311 19.8458 17.8757 19.5837 17.6135L13.9859 12.0015Z"
          fill="#868686"
        />
      </svg>
      <h5 class="heading-5" v-html="modalText"></h5>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M21.8719 4.91643C22.0245 3.92501 21.0863 3.14248 20.2088 3.52952L2.73213 11.238C2.10288 11.5156 2.14891 12.4732 2.80154 12.6819L6.40561 13.835C7.09355 14.0551 7.83835 13.9412 8.43906 13.5243L16.5648 7.88461C16.8098 7.71451 17.0769 8.06456 16.8675 8.28131L11.0185 14.3395C10.4511 14.9272 10.5637 15.9231 11.2462 16.3531L17.7949 20.4786C18.5294 20.9413 19.4743 20.4765 19.6116 19.5848L21.8719 4.91643Z"
            fill="white"
          /></svg>Перейти
      </button>
    </div>
</div>
  </div>
</template>
<script>
export default {
  props: ["modalText"],
};
</script>
<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  // background: rgba(0, 0, 0, 0.6);
  .container{
    position: relative;
  }
  &__wrapper {
    svg.close {
      position: absolute;
      top: 24px;
      right: 24px;
      cursor: pointer;
      @media screen and (max-width: 470px) {
        top: 15px;
        right: 15px;
    }
    }
    @media screen and (max-width: 470px) {
        max-width: 246px;
        padding: 28px 32px;
    }
    position: absolute;
    top: 100px;
    right: 20px;
    padding: 42px;
    background-color: var(--primary-white);
    border-radius: 32px;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    gap: 16px;
    h5 {
      max-width: 292px;
      @media screen and (max-width: 470px) {
        font-size: 18px;
    }
    }
    ::v-deep span {
      color: #2aa2ff;
    }
    button {
      @include button($background-color: #2aa2ff);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 8px;
      color: var(--primary-white);
    }
  }
}
</style>