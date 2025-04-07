<template>
  <section class="faq">
    <div class="container">
      <div class="faq__wrapper">
        <h1 class="heading-2">Вопрос-ответ</h1>
        <div class="faq__wrapper-accordion">
          <div
            v-for="(item, i) in items"
            :key="i"
            :data-index="i + 1"
            class="item"
            :class="{ active: activeDataIndex === i + 1 }"
            @click="setActiveDataIndex(i + 1)"
          >
            <div class="item__header">
              <h1 class="heading-5">{{ item.question }}</h1>
              <svg
                v-if="activeDataIndex === i + 1"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M29.1658 25.8335C29.0016 25.8343 28.8389 25.8023 28.6872 25.7393C28.5355 25.6763 28.3979 25.5837 28.2825 25.4669L19.9492 17.1335L11.6158 25.4669C11.3737 25.5838 11.1003 25.6195 10.8363 25.5688C10.5723 25.518 10.3316 25.3835 10.1501 25.1851C9.96859 24.9867 9.85587 24.7351 9.82868 24.4677C9.80148 24.2002 9.86127 23.931 9.99915 23.7002L19.1658 14.5335C19.4002 14.2995 19.7179 14.168 20.0492 14.168C20.3804 14.168 20.6981 14.2995 20.9325 14.5335L30.0992 23.7002C30.3332 23.9346 30.4647 24.2523 30.4647 24.5835C30.4647 24.9148 30.3332 25.2325 30.0992 25.4669C29.9779 25.5899 29.8322 25.6862 29.6714 25.7493C29.5107 25.8125 29.3384 25.8412 29.1658 25.8335Z"
                  fill="#282828"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M20 25.8334C19.8358 25.8341 19.673 25.8021 19.5213 25.7391C19.3696 25.6762 19.2321 25.5835 19.1167 25.4667L9.99999 16.3C9.84767 16.0651 9.77864 15.7858 9.80395 15.507C9.82926 15.2281 9.94746 14.9659 10.1396 14.7622C10.3317 14.5586 10.5867 14.4253 10.8636 14.3838C11.1405 14.3423 11.4233 14.395 11.6667 14.5334L20 22.8667L28.3333 14.5334C28.5767 14.395 28.8595 14.3423 29.1364 14.3838C29.4133 14.4253 29.6683 14.5586 29.8604 14.7622C30.0525 14.9659 30.1707 15.2281 30.196 15.507C30.2213 15.7858 30.1523 16.0651 30 16.3L20.8333 25.4667C20.6125 25.6907 20.3144 25.8219 20 25.8334Z"
                  fill="#282828"
                />
              </svg>
            </div>
            <div
              class="item__body"
              :style="{
                height: activeDataIndex === i + 1 ? 'auto' : '0',
                marginTop: activeDataIndex === i + 1 ? '12px' : '0',
              }"
            >
              <p class="text">{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
export default {
  data() {
    return {
      activeDataIndex: null, // Track active item
      items: [
        {
          question: "Чем вы отличаетесь от других сервисов?",
          answer:
            "Мы имеем больше метрик для принятия управленческих решений, и гарантируем точность данных, поскольку сами разбираемся в специфике маркетплейсов и фин учета. Даем не только сервис, но и доступ в комьюнити с базой знаний",
        },
        {
          question: "Безопасно ли передавать вам ключи от API маркетплейсов?",
          answer:
            "Да, мы запрашиваем доступ только на чтение и не имеем доступов к вашему кабинету. Все данные сохраняют конфиденциальность",
        },
        {
          question: "Ваш сервис автоматизирован?",
          answer:
            "Да, мы работаем как по API так и в ручном режиме. В случае, если маркетплейсы будут сбоить - вы все равно сможете получить корректные данные",
        },
        {
          question: "Насколько стабильно работает сервис?",
          answer:
            "Ежедневно над проектом трудятся десятки сотрудников и сервера обеспечивают полную работоспособность",
        },
      ],
    };
  },
  methods: {
    setActiveDataIndex(index) {
      // Toggle the index: if it's active, close it; otherwise, activate it
      this.activeDataIndex = this.activeDataIndex === index ? null : index;
    },
  },
};
</script>
  
  <style lang="scss" scoped>
.faq {
  width: 100%;
  padding-top: 72px;
  &__wrapper {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    h1{
      color: var(--primary-black);
    }
    &-accordion {
      width: 100%;
      display: flex;
      justify-content: start;
      align-items: start;
      flex-direction: column;
      margin-top: 32px;
      gap: 32px;
      .item {
        width: 100%;
        padding: 32px;
        border-radius: 32px;
        background: var(--primary-white);
        box-shadow: var(--box-shadow-black);
        cursor: pointer;
        transition: all 0.3s ease;

        &__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          h1{
            color: var(--primary-black);
          }
          svg {
            min-width: 40px;
            min-height: 40px;
          }
        }

        &__body {
          overflow: hidden;
          transition: height 0.3s ease, margin-top 0.3s ease;
          p {
            max-width: 750px;
            color: var(--secondary-text-4);
          }
        }

        &.active {
          background: var(--card-bg);
        }
      }
    }
  }
}
</style>
  