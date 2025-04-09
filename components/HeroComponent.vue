<template>
  <section>
    <div class="container">
      <div class="hero">
        <div class="service__banner">
          <img src="/images/Vector.png" class="bg_vector" alt="" />
          <div class="service__banner-left">
            <h1 class="heading-1">
              Сервис финансового учета <span>для селлеров</span>
            </h1>
            <h5 class="heading-5-semibold">
              Точно расшифровываем отчеты маркетплейсов, показываем чистую
              прибыль и помогаем принимать правильные решения
            </h5>
            <button @click="openModal">Попробовать 7 дней бесплатно</button>
          </div>
          <div class="service__banner-right">
            <img src="/images/chart.png" alt="" />
          </div>
        </div>
        <div class="finance__banner">
          <div class="finance__banner-item">
            <img class="item_img" src="/images/banner_item-1.png" alt="" />
            <div>
              <img src="/images/icons/Tick-2.png" alt="" />
              <p class="text-semibold">
                Настройка финансового учёта кабинета <span class="text-bold">за 5 минут</span>
              </p>
            </div>
          </div>
          <span class="item-border"></span>
          <div class="finance__banner-item">
            <img class="item_img" src="/images/banner_item-2.png" alt="" />
            <div>
              <img src="/images/icons/Tick-2.png" alt="" />
              <p class="text-semibold">
                Считаем реальную чистую прибыль
                <span class="text-bold">с учетом ВСЕХ дополнительных расходов</span>, включая
                брак, кредиты и прочие
              </p>
            </div>
          </div>
          <span class="item-border"></span>
          <div class="finance__banner-item">
            <img class="item_img" src="/images/banner_item-3.png" alt="" />
            <div>
              <img src="/images/icons/Tick-2.png" alt="" />
              <p class="text-semibold">
                Считаем доходность на вложенный капитал
                <span class="text-bold">по каждому товару</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  inject: ['scrollTop'],
  methods: {
    async openModal() {
      await this.scrollTop();
      this.$emit(
        "open-modal",
        "Войдите или зарегистрируйтесь <span>через телеграм</span>"
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 72px;
  padding-bottom: 72px;
  .service__banner {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
      @media screen and (max-width: 850px) {
        width: 100%;
      }
      button {
        margin-top: 20px;
        @include button($background-color: var(--primary-black));
        @media screen and (max-width: 850px) {
          width: 100%;
        }
      }
      h1 {
        color: var(--primary-black);
        @media screen and (max-width: 450px) {
        }
        span {
          color: var(--secondary-text-2);
        }
      }
      h5 {
        margin-top: 12px;
        color: var(--secondary-text);
        max-width: 658px;
        @media screen and (max-width: 450px) {
          font-size: 18px;
        }
      }
    }
    &-right {
      display: flex;
      justify-content: center;
      align-items: center;
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
  .finance__banner {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: row;
    padding: 42px 73px;
    background-color: var(--primary-white);
    box-shadow: var(--box-shadow-black);
    border-radius: 82px;
    @media screen and (max-width: 950px) {
      padding: 20px 45px;
    }
    @media screen and (max-width: 850px) {
      padding: 0;
      box-shadow: none;
    }
  
    .item-border {
      width: 4px;
      height: 60px;
      border-radius: 1000px;
      background-color: var(--border-color);
      align-self: center;
      @media screen and (max-width: 850px) {
        display: none;
      }
    }
    @media screen and (max-width: 850px) {
      flex-direction: column;
      align-items: center;
    }
    &-item {
      position: relative;
      width: calc(100% / 3);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      max-width: 500px;
      @media screen and (max-width: 850px) {
        width: 100%;
      }
      .item_img{
        width: 170px;
        height: 150px;
      }
      &:first-child {
        padding-right: 30px;
        @media screen and (max-width: 850px) {
          padding-right: 0;
        }
      }
      &:nth-child(3) {
        padding-right: 30px;
        padding-left: 30px;
        @media screen and (max-width: 850px) {
          padding-right: 0;
          padding-left: 0;
        }
      }
      &:last-child {
        padding-left: 30px;
        @media screen and (max-width: 850px) {
          padding-left: 0;
        }
      }
      div {
        display: flex;
        justify-content: start;
        align-items: start;
        flex-direction: row;
        gap: 8px;
        p {
          color: var(--primary-black);
          span {
            color: var(--heading-text);
          }
        }
        img {
          width: 40px;
          height: 40px;
          
        }
      }
    }
  }
}
</style>