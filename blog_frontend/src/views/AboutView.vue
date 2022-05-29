<template>
  <body>
    <Card>
        <template #title>
            <h1>About</h1>
        </template>
        <template #content>
            <img src="../assets/logo.png">
            <p>
                Додаток в якому можно створювати та видаляти пости. Також реалізована можливість коментувати кожен пост.
                Для створення постів та коментарів потрібно бути авторизованим.
            </p>
            <h5>Виконав: Новіков О.О. КВ-11мн</h5>
        </template>
    </Card>
  </body>
</template>

<script>
import Card from 'primevue/card'

export default {

    components: {
        Card,
    },
}
</script>