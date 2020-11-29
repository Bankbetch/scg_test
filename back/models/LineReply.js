class LineReply {
  constructor(splitStatus, detail, bgColor, deliveryDescription) {
    this.boxMessage = {
      type: "box",
      layout: "horizontal",
      contents: [
        {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "box",
              layout: "horizontal",
              contents: [
                {
                  type: "text",
                  text: splitStatus[0] + " น.",
                },
              ],
            },
            {
              type: "box",
              layout: "horizontal",
              contents: [
                {
                  type: "spacer",
                  size: "xxl",
                },
                {
                  type: "text",
                  text: detail.status_description,
                  size: "sm",
                },
              ],
              spacing: "none",
              margin: "md",
            },
            {
              type: "box",
              layout: "horizontal",
              contents: [
                {
                  type: "spacer",
                  size: "xxl",
                },
                {
                  type: "text",
                  text: detail.location,
                  size: "sm",
                },
                {
                  type: "text",
                  text: detail.postcode,
                  size: "sm",
                },
              ],
              spacing: "none",
              margin: "md",
            },
            {
              type: "box",
              layout: "horizontal",
              contents: [
                {
                  type: "spacer",
                  size: "xxl",
                },
                {
                  type: "text",
                  text: deliveryDescription,
                  size: "sm",
                },
              ],
              spacing: "none",
              margin: "md",
            },
          ],
        },
      ],
      backgroundColor: bgColor,
      cornerRadius: "md",
      paddingAll: "10px",
    };
  }
  getArray() {
    return this.boxMessage;
  }
  getPayload() {}
}

module.exports = LineReply;
