export function getData() {
    // Arrowという文字列を返す処理をアロー関数を入れて書きましょう。

    let getArrowString = () => {
      return "Arrow";
    };

    return getArrowString() // ここにアロー関数の処理を書く
}