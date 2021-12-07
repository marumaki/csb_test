/**
 * const,let等の変数宣言
 */

// var val1 = "var変数宣言";
// console.log(val1);

// // var変数は上書き可能
// val1 ="var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き&再宣言不可能
// val3 = "const変数を上書き";
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更（追加や上書き等）が可能
// const val4 = {
//   name: "まるこ",
//   age: 38,
// };
// val4.name = "malco";
// val4.address = "yokohama";
// console.log(val4);

// constで定義した配列はプロパティの変更（追加や上書き等）が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "まるこ";
// const age = "38";
// // 「わたしの名前はまるこです。年齢は38歳です。」というテキストを表示したい場合

// // 従来の方法
// const message1 = "わたしの名前は" + name +"です。年齢は" + age + "歳です。";
// console.log(message1)

// // テンプレート文字列を用いた方法
// // 文字列はバッククウォート「``」で囲む。変数部分は「${変数名}」で指定
// const message2 = `わたしの名前は${name}です。年齢は${age}歳です。`
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です"))

// // アロー関数
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です"));

// // const func3 = (num1, num2) => {
// //   return num1 + num2;
// // }
// const func3 = (num1, num2) => num1 + num2; // 1行でも書ける
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "まるこ",
//   age: 38,
// };
// const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message3);

// オブジェクトの分割代入
// const { name, age } = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// 配列で分割代入
// const myProfile = ['まるこ', 38];

// const message5 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message5);

// const [name, age] = myProfile;
// const message6 = `わたしの名前は${name}です。年齢は${age}歳です。`
// console.log(message6);
