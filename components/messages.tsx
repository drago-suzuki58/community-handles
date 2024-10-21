const messages = {
  en: {
    // header
    join_the_community: `Join the community`,
    members: `Members`,
    create_your_own: `Create your own community handle`,

    // root
    title: (domain: string) => `Get your own ${domain} handle for Bluesky`,
    description: (domain: string) => `Follow the instructions below to get your own ${domain} handle`,
    enter_handle: `Enter your current handle`,
    submit: `Submit`,
    enter_handle_description: `Enter your current handle, not including the @`,
    handle_not_found: `Handle not found - please try again`,
    account_found: `Account found`,
    choose_new_handle: `Choose your new handle`,
    enter_domain_handle: (domain: string) => `Enter the ${domain} handle that you would like to have, not including the @`,
    error_handle_taken: `Handle already taken - please enter a different handle`,
    error_invalid_handle: `Invalid handle - please enter a different handle`,
    error_slur: `Invalid handle - please enter a different handle`,
    error_reserved: `Reserved handle - please enter a different handle`,
    error_default: `An error occured - please try again`,
    change_handle_tutorial: `Change your handle within the Bluesky app`,
    change_handle_tutorial_description: (newHandle: string | undefined) => `Go to Settings > Advanced > Change my handle. Select "I have my own domain" and enter ${newHandle ? `"${newHandle}"` : "your new handle"}. Finally, tap "Verify DNS Record".`,
    like_project_1: `If you like this project, consider `,
    like_project_2: `sponsoring my work`,
    like_project_3: `.`,

    // members

    // create-your-own
    create_title: `Create a Community Handle for your community`,
    create_description: `Want a custom community handle for your community, like @alex.swifties.social, @jay.army.social, or @jane.kawaii.social? Follow these steps to get one.`,
    create_step_1: `Buy a domain`,
    create_step_1_description: `Buy a domain from a domain registrar. We use`,
    create_step_1_description_2: `Namecheap`,
    create_step_1_description_3: `, but it doesn't matter which one you use. Just make sure you are able to change where you point the nameservers.`,
    create_step_2: `Host the Community Handles tool`,
    create_step_2_description: `You then need to host the tool.`,
    create_step_2_description_2: `If you want to host it yourself, `,
    create_step_2_description_3: `fork the project on GitHub`,
    create_step_2_description_4: `. It's a Next.js project, so you can deploy it however you like. Check out the README for the recommended solution, using Vercel and Railway.`,
    create_step_2_description_5: `Using the hosted version? (no longer available) Go to the billing portal.`,
    create_step_2_description_6: `Go to the billing portal`
  },
  ja: {
    // header
    join_the_community: `コミュニティに参加`,
    members: `メンバー`,
    create_your_own: `独自のコミュニティハンドルを作成`,

    // root
    title: (domain: string) => `${domain}をBlueskyで取得する`,
    description: (domain: string) => `以下に従って、${domain}のハンドルを取得しましょう`,
    enter_handle: `現在のハンドルを入力`,
    submit: `送信`,
    enter_handle_description: `ここに現在のハンドルを @ は含めずに入力してください`,
    handle_not_found: `ハンドルが見つかりませんでした。もう一度お試しください`,
    account_found: `アカウントが見つかりました`,
    choose_new_handle: `新しいハンドルを選択してください`,
    enter_domain_handle: (domain: string) => `取得したい${domain}のハンドルを @ は含めずに入力してください`,
    error_handle_taken: `ハンドルはすでに使用されています。別のハンドルを入力してください`,
    error_slur: `無効なハンドルです。別のハンドルを入力してください`,
    error_reserved: `予約されているハンドルです。別のハンドルを入力してください`,
    error_default: `エラーが発生しました。もう一度お試しください`,
    change_handle_tutorial: `Blueskyアプリ内でハンドルを変更する方法`,
    change_handle_tutorial_description: (newHandle: string | undefined) => `設定 > 詳細 > ハンドルを変更 に移動します。「独自のドメインを持っています」を選択し、"${newHandle ? `"${newHandle}"` : "新しいハンドル"}"を入力します。最後に、「DNSレコードを確認」をタップします。`,
    like_project_1: `このプロジェクトが気に入ったら`,
    like_project_2: `ぜひ私をサポートしてください`,
    like_project_3: `。`,

    // members

    // create-your-own
    create_title: `コミュニティ用の独自ハンドルを作成`,
    create_description: `@alex.swifties.social、@jay.army.social、@jane.kawaii.socialのようなカスタムコミュニティハンドルを作成したいですか？以下の手順に従って取得しましょう。`,
    create_step_1: `ドメインを購入`,
    create_step_1_description: `ドメインレジストラからドメインを購入します。私たちは`,
    create_step_1_description_2: `Namecheap`,
    create_step_1_description_3: `を使用していますが、どのレジストラを使用しても問題ありません。ただし、ネームサーバーを指す場所を変更できることを確認してください。`,
    create_step_2: `コミュニティハンドルツールをホスト`,
    create_step_2_description: `次に、ツールをホストする必要があります。`,
    create_step_2_description_2: `自分でホストする場合は、`,
    create_step_2_description_3: `GitHubでプロジェクトをフォーク`,
    create_step_2_description_4: `してください。これはNext.jsプロジェクトなので、お好きなようにデプロイできます。推奨される解決策であるVercelとRailwayを使用するREADMEを確認してください。`,
    create_step_2_description_5: `すでにホストされたものを使用していますか？（現在は利用できません）請求ポータルに移動します。`,
    create_step_2_description_6: `請求ポータルに移動`
  },
  // Other languages...
};

export default messages;