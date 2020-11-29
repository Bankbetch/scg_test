const line = require("@line/bot-sdk"),
  axios = require("axios"),
  config = require("../configs/app"),
  lineClient = new line.Client({
    channelAccessToken: config.lineChannelAccessToken,
    channelSecret: config.lineChannelSecret,
  }),
  { headerAxiosForThaiPost } = require("../helpers/axios.helper"),
  LineReply = require("../models/LineReply");

class LineModule {
  static async replyMessage(message) {
    let cardMessage = [];
    promiseTrack(message);
    const {
      response: { items },
    } = await promiseTrack(message);
    let signature;
    const key = Object.keys(items);
    if (items[key[0]].length > 0) {
      items[key[0]].forEach((detail) => {
        const bgColor = detail.delivery_status == "S" ? "#ABEBC6" : "#EEEEEE";
        const deliveryDescription =
          detail.delivery_description !== null
            ? detail.delivery_description
            : " ";
        const splitStatus = detail.status_date.split("+");
        let replyMessage = new LineReply(
          splitStatus,
          detail,
          bgColor,
          deliveryDescription
        );
        signature = detail.signature;
        cardMessage.push(replyMessage.getArray());
      });
      const messages = {
        type: "flex",
        altText: "สถานะการส่งของ",
        contents: {
          type: "carousel",
          contents: [
            {
              type: "bubble",
              size: "giga",
              body: {
                type: "box",
                layout: "vertical",
                contents: [
                  {
                    type: "text",
                    text: key[0],
                    decoration: "none",
                    size: "xl",
                    weight: "bold",
                  },
                  {
                    type: "box",
                    layout: "vertical",
                    contents: cardMessage,
                    spacing: "sm",
                    margin: "md",
                  },
                  signature !== null
                    ? {
                        type: "image",
                        url: signature,
                        size: "xl",
                      }
                    : undefined,
                ],
              },
            },
          ],
        },
      };
      return lineClient.replyMessage(message.replyToken, messages);
    } else {
      const msg = {
        type: "text",
        text: "ไม่พบหมายเลขพัสดุที่ระบุ",
      };
      return lineClient.replyMessage(message.replyToken, msg);
    }
    function promiseTrack(message) {
      return new Promise(async (resolve, reject) => {
        try {
          const body = {
            status: "all",
            language: "TH",
            barcode: [message.message.text],
          };
          const result = await axios
            .post(
              `${config.thaiPostTrack}`,
              body,
              headerAxiosForThaiPost(await getTrack())
            )
            .then((res) => res);
          resolve(result.data);
        } catch (error) {
          console.log(error);
          reject(error);
        }
      });
    }
    function getTrack() {
      return new Promise(async (resolve, reject) => {
        try {
          const result = await axios
            .post(
              `${config.thaiPostUrl}`,
              {},
              headerAxiosForThaiPost(config.thaipostKey)
            )
            .then((res) => res);
          resolve(result.data.token);
        } catch (error) {
          reject(error);
        }
      });
    }
  }

  static checkText(message) {
    const msg = {
      type: "text",
      text: "ระบุเลขที่ต้องการค้นหาได้เลย",
    };
    return lineClient.replyMessage(message.replyToken, msg);
  }
}

module.exports = LineModule;
