<template>
  <div class="pricing">
    <h1 class="heading-3">Оцифруйте свой бизнес уже сегодня!</h1>
    <ul>
      <li class="text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 12.3709L9.76 16.1209L18 7.88086"
            stroke="#282828"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Капитализация складов</p>
      </li>
      <li class="text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 12.3709L9.76 16.1209L18 7.88086"
            stroke="#282828"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>ABC-анализ</p>
      </li>
      <li class="text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 12.3709L9.76 16.1209L18 7.88086"
            stroke="#282828"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Экспорт файлов</p>
      </li>
      <li class="text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 12.3709L9.76 16.1209L18 7.88086"
            stroke="#282828"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Быстрая техподдержка</p>
      </li>
      <li class="text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 12.3709L9.76 16.1209L18 7.88086"
            stroke="#282828"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Доходность по артикулам</p>
      </li>
      <li class="text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 12.3709L9.76 16.1209L18 7.88086"
            stroke="#282828"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Реклама WB по артикулам</p>
      </li>
      <li class="text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 12.3709L9.76 16.1209L18 7.88086"
            stroke="#282828"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Финансовые отчёты</p>
      </li>
      <li class="text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 12.3709L9.76 16.1209L18 7.88086"
            stroke="#282828"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Дашборды</p>
      </li>
      <li class="text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 12.3709L9.76 16.1209L18 7.88086"
            stroke="#282828"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Аналитика продаж</p>
      </li>
      <li class="text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 12.3709L9.76 16.1209L18 7.88086"
            stroke="#282828"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Доступ в комьюнити</p>
      </li>
    </ul>
    <div class="price">
      <div class="price__old">
        <h3 class="heading-5-semibold">
          5,000 ₽<svg
            xmlns="http://www.w3.org/2000/svg"
            width="69"
            height="7"
            viewBox="0 0 69 7"
            fill="none"
          >
            <path d="M1 6L68 1" stroke="#006B49" stroke-width="2" />
          </svg>
        </h3>
        <span>-30%</span>
      </div>
      <div class="price__new">
        <h1 class="heading-3">
          3,500 ₽/
          <p class="text-semibold">месяц</p>
        </h1>
        <button>Оставить заявку</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.pricing {
  width: 100%;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 1fr 2fr;
  column-gap: 54px;
  padding: 42px;
  max-width: 862px;
  background: var(--accent-gradient);
  box-shadow: var(--box-shadow-green);
  margin: 0 auto;
  margin-top: 72px;
  border-radius: 40px;
  border: 2px solid var(--primary-black);
  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    padding: 32px 24px;
  }
  h1 {
    align-content: end;
  }
  ul {
    grid-row: span 2;
    @media screen and (max-width: 650px) {
      margin-top: 12px;
      grid-row: 2;
    }
    li {
      display: flex;
      justify-content: start;
      align-items: start;
      gap: 4px;
      margin-top: 6px;
    }
  }
  .price {
    align-content: end;
    @media screen and (max-width: 650px) {
      margin-top: 20px;
    }
    &__old {
      display: flex;
      gap: 8px;
      h3 {
        position: relative;
        font-weight: 500;
        color: var(--secondary-text-2);
        svg {
          position: absolute;
          left: -3px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      span {
        color: var(--primary-black);
        font-size: 12px;
        font-weight: 600;
        line-height: 14px;
        letter-spacing: -0.5px;
        width: 42px;
        height: 26px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary-white);
        border-radius: 8px;
      }
    }
    &__new {
      h1 {
        display: flex;
        align-items: end;
        p {
          margin-left: -7px;
        }
      }
      button {
        @include button($background-color: var(--primary-black));
        margin-top: 8px;
      }
    }
  }
}
</style>