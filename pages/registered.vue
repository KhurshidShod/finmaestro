<template lang="">
    <MainHeader
    :modalText="modalText"
    :isModalOpen="isModalOpen"
    @toggleModal="toggleModal"
    @update:modalText="updateModalText"
  />
    <div class="registered">
        <div class="container">
            <div class="registered__wrapper">
                <div class="service__banner">
          <img src="/images/Vector.png" class="bg_vector" alt="" />
          <div class="service__banner-left">
            <h1 class="heading-1">
                Спасибо за регистрацию
            </h1>
            <h5 class="heading-5-semibold">
              Активируйте пробный период. Надеемся, вы останетесь довольны нашим сервисом
            </h5>
            <button @click="openModall">Попробовать 7 дней бесплатно</button>
          </div>
          <div class="service__banner-right">
            <img src="/images/heart.png" alt="" />
          </div>
        </div>
                <ServiceOverview @open-modal="handleHeroModal" />
                <Pricing @open-modal="handleHeroModal" />
            </div>
        </div>
    </div>
  <Footer />
</template>
<script>
export default {
  data() {
    return {
      modalText: "",
      isModalOpen: false,
    };
  },
  provide(){
    return {
      scrollTop: this.scrollToTop
    }
  },
  methods: {
    async openModall() {
      await this.scrollToTop();
      this.handleHeroModal("Войдите или зарегистрируйтесь <span>через телеграм</span>");
    },
    toggleModal(state) {
      this.isModalOpen = state;
    },
    updateModalText(message) {
      this.modalText = message;
    },
    handleHeroModal(message) {
      this.modalText = message;
      this.isModalOpen = true;
    },
    scrollToTop() {
      return new Promise((resolve) => {
        const checkIfAtTop = () => {
          if (window.scrollY === 0) {
            window.removeEventListener("scroll", checkIfAtTop);
            resolve();
          }
        };
        window.addEventListener("scroll", checkIfAtTop);
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (window.scrollY === 0) {
          resolve();
        }
      });
    },
  },
};
</script>
<style lang="scss">
.service__banner {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
  background: var(--accent-gradient);
  padding: 72px 56px;
  border-radius: 56px;
  box-shadow: var(--box-shadow-black);
  overflow: hidden;
  @media screen and (max-width: 850px) {
    padding: 20px;
    border-radius: 40px;
  }
  .bg_vector {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
    @media screen and (max-width: 850px) {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media screen and (max-width: 850px) {
    flex-direction: column-reverse;
  }
  &-left {
    width: 55%;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    z-index: 1;
    gap: 12px;
    h1 {
      color: var(--primary-black);
    }
    @media screen and (max-width: 850px) {
      width: 100%;
    }
    button {
      @include button($background-color: var(--primary-black));
      @media screen and (max-width: 850px) {
        width: 100%;
      }
    }
    h5 {
      margin-bottom: 12px;
      color: var(--secondary-text);
      max-width: 658px;
      @media screen and (max-width: 450px) {
        font-size: 18px;
      }
    }
  }
  &-right {
    width: 45%;
    z-index: 1;
    @media screen and (max-width: 850px) {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>