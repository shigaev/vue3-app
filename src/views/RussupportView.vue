<template>
  <h2>Russupport old project (yookassa)</h2>
  <p>
    <b>Class: <i>Yakassa</i></b>
  </p>
  <p>
    Функция: <i>actionResponse()</i>
  </p>
  
  <code>
    <pre>
    public function actionResponse() {
      $source = file_get_contents('php://input');
      $requestBody = json_decode($source, true);
      $orderLog = new RequestLog();

      try {
        $notification = ($requestBody['event'] === NotificationEventType::PAYMENT_SUCCEEDED)
          ? new NotificationSucceeded($requestBody)
          : new NotificationWaitingForCapture($requestBody);

        $this->logWriter($notification); // Отправляет логи
    </pre>
  </code>
  <p>
    <b>Что пришло в логи после оплаты: </b>
  </p>
  <code>
    <pre>
      "object": {
      "id": "2a7f098c-000f-5000-8000-17627fe2bbd8",
      "status": "succeeded",
      "recipient": {
        "account_id": "681587",
        "gateway_id": "1687571"
      },
      "amount": {
        "value": "1.00",
        "currency": "RUB"
      },
      "description": "Оплата счета на сумму 1.00 по заказу №000146019 в сервисном центре Rus.support",
      "payment_method": {
        "last4": "4477",
        "first6": "555555",
        "expiry_year": "2025",
        "expiry_month": "04",
        "card_type": "MasterCard",
        "issuer_country": "US",
        "type": "bank_card",
        "id": "2a7f098c-000f-5000-8000-17627fe2bbd8",
        "saved": false,
        "title": "Bank card *4477"
      },
      "created_at": "2022-08-05T10:49:48.924+00:00",
      "captured_at": "2022-08-05T10:50:04.669+00:00",
      "refunded_amount": {
        "value": "0.00",
        "currency": "RUB"
      },
      "paid": true,
      "refundable": true,
      "authorization_details": {
        "rrn": "824387056054748",
        "auth_code": "470748",
        "three_d_secure": {
          "applied": true
        }
      },
      "transfers": [],
      "income_amount": {
        "value": "0.96",
        "currency": "RUB"
      },
      "test": true
    },
    "type": "notification",
    "event": "payment.succeeded"
  }
    </pre>
  </code>
</template>

<script>
export default {
  name: "RussupportView"
}
</script>

<style lang="scss" scoped>

</style>