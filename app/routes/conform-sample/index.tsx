import { Form } from "react-router";
import type { Route } from "./+types";
import { z } from "zod";

const schema = z.object({
  // zodが必要なチェックを適切に実行するためには、前処理ステップが必要です。
  // 空の入力の値は通常、空の文字列であるためです。
  email: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z.string({ required_error: "Email is required" }).email("Email is invalid")
  ),
  // message: z.preprocess(
  //   (value) => (value === "" ? undefined : value),
  //   z
  //     .string({ required_error: "Message is required" })
  //     .min(10, "Message is too short")
  //     .max(100, "Message is too long")
  // ),
});

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  // `Object.fromEntries` を使用してオブジェクトを構築します。
  const payload = Object.fromEntries(formData);

  console.log(formData, payload);
  // その後、zodでパースします。
  const result = schema.safeParse(payload);

  console.log(result);

  // データが有効でない場合は、エラーをクライアントに返します。
  if (!result.success) {
    const error = result.error.flatten();

    return {
      payload,
      formErrors: error.formErrors,
      fieldErrors: error.fieldErrors,
    };
  }

  // チュートリアルにとって重要ではないので、実装はスキップします。
  // console.log(result.data);

  // メッセージが送信されない場合は、フォームエラーを返します。
  // if (!message.sent) {
  //   return {
  //     payload,
  //     formErrors: ["Failed to send the message. Please try again later."],
  //     fieldErrors: {},
  //   };
  // }

  // return redirect("/messages");
}

export default function Hoge({ actionData }) {
  return (
    <div>
      <h1>Project</h1>
      <Form method="post">
        <input type="text" name="email" />
        <button type="submit">Submit</button>
      </Form>
      {actionData ? <p>{actionData.name} updated</p> : null}
    </div>
  );
}
