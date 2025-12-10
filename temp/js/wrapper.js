// wrapper.js
export class MyElementWrapper {
  constructor(element) {
    this.element = element;
    this.model = {};

    // 子からのイベントを受け取る
    this.element.addEventListener("modelChange", (e) => {
      this.model = e.detail.model;
      console.log("event");
      if (this.onModelChange) {
        this.onModelChange(this.model);
      }
    });
  }

  // 親 → 子
  setModel(model) {
    this.model = model;
    this.element.model = model;
  }

  // 子 → 親のイベントハンドラを登録
  onModelChange(callback) {
    this.onModelChange = callback;
  }
}
