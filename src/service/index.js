export class Api {
  static BASE_URL_DELAY =
    "https://frontend-challenge-7bu3nxh76a-uc.a.run.app?delay=500";
  static BASE_URL_ERROR =
    "https://frontend-challenge-7bu3nxh76a-uc.a.run.app?internalError";
  static BASE_URL_TIMEOUT =
    "https://frontend-challenge-7bu3nxh76a-uc.a.run.app?timeout";

  static async connect(data) {
    const response = await fetch(this.BASE_URL_DELAY, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => err);

    return response;
  }

  static async installments(data) {
    const numberOfInstallments = await this.connect(data);
    const {
      1: paymentTomorrow,
      15: payIn15Days,
      30: payIn30Days,
      90: payIn90Days,
    } = numberOfInstallments;

    return { paymentTomorrow, payIn15Days, payIn30Days, payIn90Days };
  }

  static async internalServerError(data) {
    const response = await fetch(this.BASE_URL_ERROR, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => err);

    return response;
  }
}
