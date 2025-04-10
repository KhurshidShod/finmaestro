<template>
   <!-- :class="isModalOpen ? 'modal_open' : ''" -->
  <div class="modal_parent" ref="modalParent">
    <transition @enter="enterModal" @leave="leaveModal" name="fade">
      <TelegramModal
        :is-open="isModalOpen"
        @toggleModal="toggleModal"
        v-if="isModalOpen"
        :modalText="modalText"
      />
    </transition>
  </div>
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
          @click="
            openModal(
              'Войдите или зарегистрируйтесь <span>через телеграм</span>'
            )
          "
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
import gsap from "gsap";

export default {
  props: {
    modalText: String,
    isModalOpen: Boolean,
  },

  emits: ["toggleModal", "update:modalText"],
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    enterModal(el, done) {
      // this.$refs.modalParent.style.display = "flex";
      // this.$refs.modalParent.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
      gsap.fromTo(this.$refs.modalParent,
        {opacity: 0, pointerEvents: 'none'},
        {opacity: 1, pointerEvents: 'all', duration: 0.15, ease: 'power2.out'}
      )
      const tl = gsap.timeline({ onComplete: done });
      gsap.fromTo(
        el,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: done,
        }
      );
    },
    leaveModal(el, done) {
      gsap.to(el, {
        opacity: 0,
        y: -50,
        duration: 0.5,
        ease: "power2.out",
        onComplete: done,
      });
      // setTimeout(() => {
        gsap.to(this.$refs.modalParent,
        {opacity: 0, pointerEvents: 'none',duration: 0.5, ease: 'power2.out'},
      )
      // }, 500);
    },
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    toggleModal(state) {
      this.$emit("toggleModal", state);
    },
    openModal(el) {
      this.toggleModal(true);
      this.$emit("toggleModal", true);
      this.$emit("update:modalText", el); // Ensure the modalText is updated
    },
  },
};
</script>

<style lang="scss" scoped>
.modal_parent {
  // display: none;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  pointer-events: none;
  transition: .3s linear;
  // &.modal_open {
  //   display: flex;
  // }
}

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
