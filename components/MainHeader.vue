<template>
  <TelegramModal
    @toggleModal="toggleModal"
    v-if="isModalOpen"
    :modalText="modalText"
  />
  <header>
    <div class="container">
      <nav class="nav">
        <NuxtLink to="/" class="nav__logo">
          <img
            style="width: 170px"
            src="/images/icons/logo.png"
            alt="Finmaestro Logo"
          />
        </NuxtLink>
        <div class="nav__actions" :class="isNavOpen ? 'navopened' : ''">
          <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <path
              d="M 38.982422 6.9707031 A 2.0002 2.0002 0 0 0 37.585938 7.5859375 L 24 21.171875 L 10.414062 7.5859375 A 2.0002 2.0002 0 0 0 8.9785156 6.9804688 A 2.0002 2.0002 0 0 0 7.5859375 10.414062 L 21.171875 24 L 7.5859375 37.585938 A 2.0002 2.0002 0 1 0 10.414062 40.414062 L 24 26.828125 L 37.585938 40.414062 A 2.0002 2.0002 0 1 0 40.414062 37.585938 L 26.828125 24 L 40.414062 10.414062 A 2.0002 2.0002 0 0 0 38.982422 6.9707031 z"
            ></path>
          </svg> -->
          <button
            @click="openModal('Войдите <span>через телеграм</span>')"
            class="button"
          >
            Войти
          </button>
          <button
            @click="openModal('Зарегистрируйтесь <span>через телеграм</span>')"
            class="button"
          >
            Регистрация
          </button>
        </div>
        <svg
        @click="openModal('Войдите или зарегистрируйтесь <span>через телеграм</span>')"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_2003_665)">
            <path
              d="M23 11H1C0.447715 11 0 11.4477 0 12C0 12.5523 0.447715 13 1 13H23C23.5523 13 24 12.5523 24 12C24 11.4477 23.5523 11 23 11Z"
              fill="#282828"
            />
            <path
              d="M23 4H1C0.447715 4 0 4.44771 0 5C0 5.55228 0.447715 6 1 6H23C23.5523 6 24 5.55228 24 5C24 4.44771 23.5523 4 23 4Z"
              fill="#282828"
            />
            <path
              d="M23 18H1C0.447715 18 0 18.4477 0 19C0 19.5523 0.447715 20 1 20H23C23.5523 20 24 19.5523 24 19C24 18.4477 23.5523 18 23 18Z"
              fill="#282828"
            />
          </g>
          <defs>
            <clipPath id="clip0_2003_665">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isNavOpen: false,
      modalText: "",
      isModalOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    toggleModal(state) {
      this.isModalOpen = state;
    },
    openModal(el) {
      this.modalText = el;
      this.toggleModal(true);
    },
  },
};
</script>
<style lang="scss" scoped>
header {
  .nav {
    width: 100%;
    padding-top: 24px;
    padding-bottom: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__logo {
      img {
        min-width: 168px;
      }
    }
    &__actions {
      position: relative;
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 1rem;
      transition: 0.3s linear;
      svg {
        display: none;
        width: 35px;
        height: 35px;
        cursor: pointer;
        @media screen and (max-width: 650px) {
          position: absolute;
          top: 35px;
          right: 15px;
          display: block;
        }
      }
      @media screen and (max-width: 650px) {
        display: none;
      }
      .button {
        &:first-child {
          @include button(2px solid var(--primary-black), transparent);
        }
        &:last-child {
          @include button($background-color: var(--primary-black));
        }
        @media screen and (max-width: 650px) {
          width: 100%;
        }
      }
    }
    svg {
      display: none;
      @media screen and (max-width: 650px) {
        display: block;
      }
    }
  }
}
</style>