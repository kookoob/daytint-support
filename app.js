(() => {
  "use strict";

  const translations = {
    en: {
      common: {
        navSupport: "Support", navPrivacy: "Privacy", languageLabel: "Language",
        supportEyebrow: "Daytint Support", supportTitle: "Make every day feel like yours.", supportIntro: "Find quick help for calendars, photos, widgets, exports, and more.",
        contactButton: "Email support", contactNote: "Tell us your iOS version and what happened. Please do not include sensitive personal information.",
        featureCalendarTitle: "Calendar & archive", featureCalendarBody: "Keep entries, photos, and decorations together, then find past days with archive search.",
        featureWidgetsTitle: "Three widget sizes", featureWidgetsBody: "Add Daytint in the three fixed iOS widget sizes from the Home Screen editor.",
        featureExportTitle: "Flexible export", featureExportBody: "Share the monthly calendar poster as a PNG, or share monthly insights as a PDF.",
        faqEyebrow: "Quick answers", faqTitle: "Frequently asked questions", stillNeedHelp: "Still need help?", contactTitle: "We’re here to help.", contactBody: "Email us with a short description and any steps that reproduce the issue.",
        privacyEyebrow: "Privacy at Daytint", privacyTitle: "Privacy Policy", effectiveDate: "Effective October 3, 2026", privacySummary: "Daytint has no app account, advertising, analytics, or app server. Your diary content stays on your device unless you choose an iOS feature that sends data elsewhere.", privacyContactButton: "Privacy questions", footerOwner: "Yonggyu Kim / 김용규"
      },
      faq: [
        ["How do I add a Daytint widget?", "Touch and hold an empty area of your iPhone Home Screen, choose Edit, then Add Widget. Search for Daytint, choose one of the three fixed iOS widget sizes, and add it. Daytint refreshes when you open the app or bring it back to the foreground."],
        ["Why can’t Daytint see my calendar?", "Open iOS Settings, find Daytint, and allow Calendar access. Daytint uses Apple’s EventKit permission and only works with calendars available on your device."],
        ["How do I use a Google Calendar?", "Add your Google account in iOS Settings under Calendar accounts, then enable its calendars. Daytint reads the calendars exposed by iOS through EventKit; it does not sign you in to Google directly."],
        ["How do I adjust a photo?", "From Calendar, open Customize calendar and tap the photo on the canvas. Use the size and rotation sliders, or pinch and rotate the photo directly."],
        ["Can I leave the caption empty?", "Yes. The caption is optional. Leave it blank for a photo-only or decoration-only layout."],
        ["Which public holidays are included?", "Select countries to show reviewed official data. Available years are listed in the app. US/Canada use federal calendars; UK/Australia use dates shared by all regions; France uses metropolitan holidays. Unpublished years are not estimated. See Holiday sources for details. New years and changes are delivered through app updates."],
        ["How do I find past entries or share a month?", "Use archive search to find past entries. From Calendar, use the share button to export the monthly calendar poster as a PNG. From Monthly insights, share the month as a PDF."],
        ["Where are my entries stored?", "Entries, photos, stickers, and decorations are stored locally on your device. The app’s shared App Group makes selected content available to Daytint widgets."]
      ],
      privacy: [
        ["Who we are", "Daytint is provided by Yonggyu Kim / 김용규. For support or privacy requests, contact stockhub.kr@gmail.com."],
        ["Data stored on your device", "Daytint does not require an app account and has no advertising, analytics, or app server. Entries, photos, captions, stickers, and decorations are stored locally on your device. An Apple App Group shares the data needed by Daytint widgets. Depending on your widget settings, diary content may be visible on your Home Screen."],
        ["Device backups", "Apple operating-system backups may include Daytint app data, depending on your iCloud and device backup settings. Daytint does not provide its own cloud backup feature. Apple handles those backups under its terms and your settings."],
        ["Calendars", "If you grant optional Calendar permission, Daytint uses Apple EventKit to read the device calendars you select. If you enable calendar sync for an event, Daytint sends its title, notes, and date to the calendar provider you choose. Edits or deletions to that linked event in Daytint also change it in the chosen calendar. Calendar records may be transmitted to or stored by Apple, Google, or another account provider under that provider’s terms. Daytint does not offer direct Google sign-in."],
        ["Photos", "Daytint receives only the photos you select through the system photo picker. When a selected image is imported into Daytint, image metadata is stripped from the in-app copy."],
        ["Public holiday data", "Version 1.0 includes reviewed official holiday data on your device and makes no network requests to display it. New years and changes are added through app updates. Earlier 0.4 TestFlight versions may still request the selected country and year from Nager.Date / Nager.Holidays."],
        ["Deletion and retention", "Deleting an entry or photo in Daytint removes it when it is no longer used by another entry. Deleting a linked event in Daytint also deletes it from the chosen calendar. Uninstalling Daytint removes its local app data, subject to any Apple backup that you control, but does not itself delete events already written to an external calendar. If you email support, we receive the content and contact details you provide, use them only to handle your inquiry, keep them as needed for support, and then delete them. You can request deletion by emailing us."],
        ["This website", "This site uses no analytics, advertising, cookies, or remote fonts. It is hosted on GitHub Pages. GitHub may process technical connection information under the GitHub General Privacy Statement.", "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement", "GitHub General Privacy Statement"],
        ["Changes and contact", "We may update this policy when Daytint’s features or providers change. The effective date above identifies the current version. Questions and deletion requests can be sent to stockhub.kr@gmail.com."]
      ]
    },
    ko: {
      common: {
        navSupport: "지원", navPrivacy: "개인정보 처리방침", languageLabel: "언어",
        supportEyebrow: "Daytint 지원", supportTitle: "매일을 나다운 색으로.", supportIntro: "캘린더, 사진, 위젯, 내보내기 등 Daytint 사용에 필요한 도움을 확인하세요.",
        contactButton: "이메일 문의", contactNote: "iOS 버전과 발생한 상황을 알려 주세요. 민감한 개인정보는 포함하지 마세요.",
        featureCalendarTitle: "캘린더와 아카이브", featureCalendarBody: "기록, 사진, 꾸미기를 한곳에 보관하고 아카이브 검색으로 지난 날을 찾으세요.",
        featureWidgetsTitle: "3가지 위젯 크기", featureWidgetsBody: "홈 화면 편집에서 iOS의 고정된 3가지 크기 중 하나로 Daytint 위젯을 추가하세요.",
        featureExportTitle: "간편한 내보내기", featureExportBody: "월간 캘린더 포스터는 PNG로, 월간 인사이트는 PDF로 공유할 수 있습니다.",
        faqEyebrow: "빠른 도움말", faqTitle: "자주 묻는 질문", stillNeedHelp: "도움이 더 필요한가요?", contactTitle: "문의해 주세요.", contactBody: "문제 상황과 재현 방법을 간단히 적어 이메일로 보내 주세요.",
        privacyEyebrow: "Daytint 개인정보 보호", privacyTitle: "개인정보 처리방침", effectiveDate: "시행일: 2026년 10월 3일", privacySummary: "Daytint에는 앱 계정, 광고, 분석 도구, 앱 서버가 없습니다. iOS 기능을 통해 외부로 보내도록 선택하지 않는 한 일기 내용은 기기에 보관됩니다.", privacyContactButton: "개인정보 문의", footerOwner: "김용규 / Yonggyu Kim"
      },
      faq: [
        ["Daytint 위젯은 어떻게 추가하나요?", "iPhone 홈 화면의 빈 공간을 길게 누르고 편집, 위젯 추가를 차례로 선택하세요. Daytint를 검색한 뒤 iOS의 고정된 3가지 위젯 크기 중 하나를 골라 추가할 수 있습니다. 앱을 열거나 다시 활성화하면 Daytint가 새로고침됩니다."],
        ["Daytint에서 캘린더가 보이지 않아요.", "iOS 설정에서 Daytint를 찾아 캘린더 접근을 허용하세요. Daytint는 Apple EventKit 권한을 사용하며 기기에 등록된 캘린더만 이용합니다."],
        ["Google 캘린더는 어떻게 사용하나요?", "iOS 설정의 캘린더 계정에 Google 계정을 추가하고 캘린더를 켜세요. Daytint는 iOS가 EventKit으로 제공하는 캘린더를 읽으며 Google에 직접 로그인하지 않습니다."],
        ["사진 크기와 각도는 어떻게 조절하나요?", "캘린더에서 캘린더 꾸미기를 열고 캔버스의 사진을 탭하세요. 크기 및 회전 슬라이더를 사용하거나 사진을 직접 오므리고 돌려 조절할 수 있습니다."],
        ["캡션을 비워 둘 수 있나요?", "네. 캡션은 선택 사항입니다. 사진이나 꾸미기만 있는 구성을 원하면 비워 두세요."],
        ["어떤 공휴일이 제공되나요?", "국가를 선택하면 확인된 공식 자료를 표시하며 제공 연도는 앱에 나옵니다. 미국·캐나다는 연방 기준, 영국·호주는 지역 공통 날짜, 프랑스는 본토 기준입니다. 미발표 연도는 추정하지 않습니다. 자세한 내용은 공휴일 출처에서 확인하세요. 새 연도와 변경 사항은 앱 업데이트로 추가합니다."],
        ["지난 기록을 찾거나 한 달을 공유하려면 어떻게 하나요?", "아카이브 검색으로 지난 기록을 찾으세요. 캘린더의 공유 버튼으로 월간 캘린더 포스터를 PNG로 내보낼 수 있고, 월간 인사이트에서는 해당 월을 PDF로 공유할 수 있습니다."],
        ["기록은 어디에 저장되나요?", "기록, 사진, 스티커, 꾸미기는 기기에 로컬로 저장됩니다. 앱의 공유 App Group을 통해 선택된 내용이 Daytint 위젯에 표시됩니다."]
      ],
      privacy: [
        ["운영자", "Daytint의 운영자는 김용규 / Yonggyu Kim입니다. 지원 또는 개인정보 관련 요청은 stockhub.kr@gmail.com으로 보내 주세요."],
        ["기기에 저장되는 데이터", "Daytint는 앱 계정을 요구하지 않으며 광고, 분석 도구, 앱 서버가 없습니다. 기록, 사진, 캡션, 스티커, 꾸미기는 기기에 로컬로 저장됩니다. Apple App Group은 Daytint 위젯에 필요한 데이터를 공유합니다. 위젯 설정에 따라 일기 내용이 홈 화면에 보일 수 있습니다."],
        ["기기 백업", "iCloud 및 기기 백업 설정에 따라 Apple 운영체제 백업에 Daytint 앱 데이터가 포함될 수 있습니다. Daytint 자체 클라우드 백업 기능은 없습니다. 해당 백업은 Apple의 약관과 사용자의 설정에 따라 Apple이 처리합니다."],
        ["캘린더", "선택 사항인 캘린더 권한을 허용하면 Daytint는 Apple EventKit을 통해 사용자가 선택한 기기 캘린더를 읽습니다. 일정의 캘린더 동기화를 켜면 제목, 메모, 날짜를 사용자가 선택한 캘린더 제공자에게 전송합니다. Daytint에서 연결된 일정을 수정하거나 삭제하면 선택한 캘린더에도 반영됩니다. 캘린더 기록은 Apple, Google 또는 다른 계정 제공자의 약관에 따라 해당 제공자에게 전송되거나 저장될 수 있습니다. Daytint는 Google 직접 로그인을 제공하지 않습니다."],
        ["사진", "Daytint는 시스템 사진 선택기에서 사용자가 선택한 사진만 받습니다. 선택한 이미지를 Daytint로 가져올 때 앱 안의 복사본에서 이미지 메타데이터를 제거합니다."],
        ["공휴일 데이터", "1.0 버전은 확인된 공식 공휴일 자료를 기기에 기본 탑재하며, 공휴일 표시를 위한 네트워크 요청을 하지 않습니다. 새 연도와 변경 사항은 앱 업데이트로 추가합니다. 이전 0.4 TestFlight 버전은 Nager.Date / Nager.Holidays에 선택 국가와 연도를 요청할 수 있습니다."],
        ["삭제 및 보관", "Daytint에서 기록이나 사진을 삭제하면 다른 기록에서 더 이상 사용하지 않을 때 제거됩니다. Daytint에서 연결된 일정을 삭제하면 선택한 캘린더에서도 삭제됩니다. 앱을 제거하면 사용자가 관리하는 Apple 백업을 제외한 로컬 앱 데이터가 삭제되지만, 이미 외부 캘린더에 작성된 일정이 앱 제거만으로 삭제되지는 않습니다. 지원 이메일을 보내면 제공한 내용과 연락처를 문의 처리에만 사용하고, 지원에 필요한 동안 보관한 뒤 삭제합니다. 이메일로 삭제를 요청할 수 있습니다."],
        ["이 웹사이트", "이 사이트는 분석 도구, 광고, 쿠키, 원격 폰트를 사용하지 않습니다. GitHub Pages에서 호스팅되며 GitHub는 GitHub 일반 개인정보 보호정책에 따라 기술적 접속 정보를 처리할 수 있습니다.", "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement", "GitHub 일반 개인정보 보호정책"],
        ["변경 및 문의", "Daytint의 기능이나 제공자가 변경되면 이 방침을 업데이트할 수 있습니다. 위 시행일이 현재 버전을 나타냅니다. 문의 및 삭제 요청은 stockhub.kr@gmail.com으로 보내 주세요."]
      ]
    },
    ja: {
      common: {
        navSupport: "サポート", navPrivacy: "プライバシー", languageLabel: "言語", supportEyebrow: "Daytint サポート", supportTitle: "毎日を、あなたらしい色に。", supportIntro: "カレンダー、写真、ウィジェット、書き出しなどの使い方をご案内します。", contactButton: "メールで問い合わせる", contactNote: "iOSのバージョンと状況をお知らせください。機密性の高い個人情報は記載しないでください。", featureCalendarTitle: "カレンダーとアーカイブ", featureCalendarBody: "記録、写真、デコレーションをまとめ、アーカイブ検索で過去の日を探せます。", featureWidgetsTitle: "3つのウィジェットサイズ", featureWidgetsBody: "ホーム画面の編集から、iOSの固定3サイズでDaytintを追加できます。", featureExportTitle: "柔軟な書き出し", featureExportBody: "月間カレンダーポスターはPNG、月間インサイトはPDFで共有できます。", faqEyebrow: "クイックガイド", faqTitle: "よくある質問", stillNeedHelp: "解決しませんか？", contactTitle: "お気軽にご連絡ください。", contactBody: "問題の内容と再現手順を簡潔にメールでお送りください。", privacyEyebrow: "Daytintのプライバシー", privacyTitle: "プライバシーポリシー", effectiveDate: "施行日：2026年10月3日", privacySummary: "Daytintにはアプリアカウント、広告、分析、アプリサーバーはありません。iOS機能で外部送信を選ばない限り、日記の内容は端末に保存されます。", privacyContactButton: "プライバシーに関する質問", footerOwner: "Yonggyu Kim / 김용규"
      },
      faq: [
        ["Daytintウィジェットを追加するには？", "iPhoneのホーム画面の空き部分を長押しし、編集、ウィジェットを追加の順に選びます。Daytintを検索し、iOSの固定3サイズから選んで追加してください。アプリを開くか前面に戻すと更新されます。"],
        ["カレンダーが表示されないのはなぜですか？", "iOSの設定でDaytintを開き、カレンダーへのアクセスを許可してください。DaytintはApple EventKitの権限を使い、端末上で利用できるカレンダーのみを扱います。"],
        ["Googleカレンダーを使うには？", "iOS設定のカレンダーアカウントにGoogleアカウントを追加し、カレンダーを有効にしてください。DaytintはiOSがEventKitで公開するカレンダーを読み取り、Googleへ直接ログインしません。"],
        ["写真を調整するには？", "カレンダーから「カレンダーをカスタマイズ」を開き、キャンバス上の写真をタップします。サイズと回転のスライダー、またはピンチと回転ジェスチャーで直接調整できます。"],
        ["キャプションは空欄にできますか？", "はい。キャプションは任意です。写真やデコレーションだけのレイアウトにする場合は空欄にしてください。"],
        ["どの祝日に対応していますか？", "国を選ぶと確認済みの公式データを表示します。対応年はアプリ内に表示。米国・カナダは連邦、英国・豪州は全地域共通、フランスは本土基準です。未発表年は推定しません。詳細は祝日データの出典をご覧ください。 新しい年や変更はアプリの更新で追加します。"],
        ["過去の記録を探したり月を共有したりするには？", "アーカイブ検索で過去の記録を探せます。カレンダーの共有ボタンから月間カレンダーポスターをPNGで書き出し、月間インサイトからその月をPDFで共有できます。"],
        ["記録はどこに保存されますか？", "記録、写真、ステッカー、デコレーションは端末内に保存されます。共有App Groupにより、選択した内容をDaytintウィジェットで利用できます。"]
      ],
      privacy: [
        ["運営者", "DaytintはYonggyu Kim / 김용규が提供します。サポートまたはプライバシーに関するご依頼はstockhub.kr@gmail.comまでお送りください。"],
        ["端末に保存されるデータ", "Daytintはアプリアカウントを必要とせず、広告、分析、アプリサーバーはありません。記録、写真、キャプション、ステッカー、デコレーションは端末内に保存されます。Apple App GroupはDaytintウィジェットに必要なデータを共有します。設定によっては日記の内容がホーム画面に表示されます。"],
        ["端末のバックアップ", "iCloudと端末のバックアップ設定によっては、AppleのOSバックアップにDaytintのデータが含まれる場合があります。Daytint独自のクラウドバックアップ機能はありません。バックアップはAppleの規約とお客様の設定に従ってAppleが処理します。"],
        ["カレンダー", "任意のカレンダー権限を許可すると、DaytintはApple EventKitを使い、選択した端末上のカレンダーを読み取ります。予定のカレンダー同期を有効にすると、タイトル、メモ、日付を選択したカレンダープロバイダーに送信します。Daytintで連携済みの予定を編集または削除すると、選択したカレンダーにも反映されます。予定はApple、Google、その他のアカウントプロバイダーの規約に従い、送信または保存される場合があります。DaytintはGoogleへの直接ログインを提供しません。"],
        ["写真", "Daytintが受け取るのは、システムの写真ピッカーで選択した写真だけです。画像を取り込む際、アプリ内コピーから画像のメタデータを削除します。"],
        ["祝日データ", "1.0では確認済みの公式祝日データを端末に内蔵し、表示のためのネットワーク通信は行いません。新しい年や変更はアプリの更新で追加します。以前の0.4 TestFlight版ではNager.Date / Nager.Holidaysに選択した国と年を要求する場合があります。"],
        ["削除と保持", "Daytintで記録や写真を削除すると、他の記録で使用されていない場合に削除されます。Daytintで連携済みの予定を削除すると、選択したカレンダーからも削除されます。アプリをアンインストールすると、お客様が管理するAppleのバックアップを除き端末内データは削除されますが、外部カレンダーに書き込み済みの予定がアンインストールだけで削除されることはありません。サポートメールの内容と連絡先はお問い合わせ対応にのみ使い、サポートに必要な期間保持した後に削除します。メールで削除を依頼できます。"],
        ["このウェブサイト", "このサイトは分析、広告、Cookie、リモートフォントを使用しません。GitHub Pagesでホストされ、GitHubはGitHub一般プライバシー声明に基づき技術的な接続情報を処理する場合があります。", "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement", "GitHub一般プライバシー声明"],
        ["変更とお問い合わせ", "Daytintの機能や提供者の変更に伴い、本ポリシーを更新する場合があります。上記の施行日が現行版を示します。ご質問と削除依頼はstockhub.kr@gmail.comまでお送りください。"]
      ]
    },
    "zh-Hans": {
      common: {
        navSupport: "支持", navPrivacy: "隐私", languageLabel: "语言", supportEyebrow: "Daytint 支持", supportTitle: "让每一天都有你的色彩。", supportIntro: "快速了解日历、照片、小组件、导出等功能。", contactButton: "邮件联系支持", contactNote: "请说明你的iOS版本和问题经过，不要发送敏感个人信息。", featureCalendarTitle: "日历与归档", featureCalendarBody: "集中保存记录、照片和装饰，并通过归档搜索查找过去的日子。", featureWidgetsTitle: "三种小组件尺寸", featureWidgetsBody: "在主屏幕编辑器中选择iOS固定的三种尺寸之一添加Daytint。", featureExportTitle: "灵活导出", featureExportBody: "可将月历海报分享为PNG，或将月度洞察分享为PDF。", faqEyebrow: "快速解答", faqTitle: "常见问题", stillNeedHelp: "仍需帮助？", contactTitle: "欢迎联系我们。", contactBody: "请通过邮件简要说明问题和复现步骤。", privacyEyebrow: "Daytint隐私", privacyTitle: "隐私政策", effectiveDate: "生效日期：2026年10月3日", privacySummary: "Daytint没有应用账户、广告、分析工具或应用服务器。除非你选择使用会向外部发送数据的iOS功能，否则日记内容保存在设备上。", privacyContactButton: "隐私问题", footerOwner: "Yonggyu Kim / 김용규"
      },
      faq: [
        ["如何添加Daytint小组件？", "长按iPhone主屏幕空白处，选择“编辑”，再选择“添加小组件”。搜索Daytint，从iOS固定的三种小组件尺寸中选择一种并添加。打开应用或让应用回到前台时会刷新。"],
        ["为什么Daytint看不到我的日历？", "在iOS“设置”中找到Daytint并允许访问日历。Daytint使用Apple EventKit权限，只能使用设备上已有的日历。"],
        ["如何使用Google日历？", "在iOS设置的日历账户中添加Google账户并启用其日历。Daytint通过EventKit读取iOS提供的日历，不会直接登录Google。"],
        ["如何调整照片？", "从“日历”打开“自定义日历”，然后轻点画布上的照片。使用大小和旋转滑块，或直接双指缩放、旋转照片。"],
        ["可以不写说明文字吗？", "可以。说明文字为可选项，可留空制作仅含照片或装饰的布局。"],
        ["包含哪些公共假日？", "选择国家显示已核实的官方数据，支持年份在应用中列出。美国和加拿大采用联邦日历；英国和澳大利亚采用各地区共同日期；法国采用本土假日。不推测未公布年份，详情见假日来源。 新年份和变更通过应用更新添加。"],
        ["如何查找旧记录或分享整月内容？", "使用归档搜索查找过去的记录。在“日历”中使用分享按钮将月历海报导出为PNG；在“月度洞察”中将整月内容分享为PDF。"],
        ["记录保存在哪里？", "记录、照片、贴纸和装饰都保存在设备本地。应用通过共享App Group向Daytint小组件提供所选内容。"]
      ],
      privacy: [
        ["我们是谁", "Daytint由Yonggyu Kim / 김용규提供。如需支持或提出隐私请求，请联系stockhub.kr@gmail.com。"],
        ["设备上存储的数据", "Daytint无需应用账户，也没有广告、分析工具或应用服务器。记录、照片、说明文字、贴纸和装饰保存在设备本地。Apple App Group共享Daytint小组件所需的数据。根据小组件设置，日记内容可能显示在主屏幕上。"],
        ["设备备份", "根据你的iCloud和设备备份设置，Apple操作系统备份可能包含Daytint应用数据。Daytint本身不提供云备份功能。Apple根据其条款和你的设置处理这些备份。"],
        ["日历", "如果你授予可选的日历权限，Daytint会通过Apple EventKit读取你选择的设备日历。如果为事件启用日历同步，Daytint会将标题、备注和日期发送给你选择的日历服务商。在Daytint中编辑或删除该关联事件也会更改所选日历中的事件。日历记录可能根据Apple、Google或其他账户服务商的条款传输或存储。Daytint不提供直接Google登录。"],
        ["照片", "Daytint只接收你通过系统照片选择器选中的照片。导入所选图片时，应用内副本会移除图片元数据。"],
        ["公共假日数据", "1.0版本在设备上内置已核实的官方假日数据，显示假日无需网络请求。新年份和变更通过应用更新添加。此前0.4 TestFlight版本仍可能向Nager.Date / Nager.Holidays请求所选国家和年份。"],
        ["删除与保留", "在Daytint中删除记录或照片后，若其他记录不再使用该内容，它将被移除。在Daytint中删除关联事件也会将其从所选日历中删除。卸载Daytint会移除本地应用数据，但你控制的Apple备份可能仍保留数据；卸载本身不会删除已写入外部日历的事件。若你发送支持邮件，我们仅为处理咨询使用你提供的内容和联系方式，在支持所需期间保留，之后删除。你可以通过邮件要求删除。"],
        ["本网站", "本网站不使用分析、广告、Cookie或远程字体，由GitHub Pages托管。GitHub可能根据《GitHub一般隐私声明》处理技术连接信息。", "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement", "GitHub一般隐私声明"],
        ["变更与联系", "Daytint的功能或服务商发生变化时，我们可能更新本政策。上方生效日期标识当前版本。问题和删除请求请发送至stockhub.kr@gmail.com。"]
      ]
    },
    "zh-Hant": {
      common: {
        navSupport: "支援", navPrivacy: "隱私權", languageLabel: "語言", supportEyebrow: "Daytint 支援", supportTitle: "讓每一天都有你的色彩。", supportIntro: "快速瞭解行事曆、照片、小工具、匯出等功能。", contactButton: "以電郵聯絡支援", contactNote: "請說明iOS版本和問題經過，請勿傳送敏感個人資料。", featureCalendarTitle: "行事曆與封存", featureCalendarBody: "集中保存記錄、照片和裝飾，並透過封存搜尋找到過去的日子。", featureWidgetsTitle: "三種小工具尺寸", featureWidgetsBody: "在主畫面編輯器中選擇iOS固定的三種尺寸之一加入Daytint。", featureExportTitle: "彈性匯出", featureExportBody: "可將月曆海報分享為PNG，或將每月洞察分享為PDF。", faqEyebrow: "快速解答", faqTitle: "常見問題", stillNeedHelp: "仍需要協助？", contactTitle: "歡迎聯絡我們。", contactBody: "請以電郵簡述問題和重現步驟。", privacyEyebrow: "Daytint隱私權", privacyTitle: "隱私權政策", effectiveDate: "生效日期：2026年10月3日", privacySummary: "Daytint沒有應用程式帳號、廣告、分析工具或應用程式伺服器。除非你選擇使用會向外傳送資料的iOS功能，日記內容會保留在裝置上。", privacyContactButton: "隱私權問題", footerOwner: "Yonggyu Kim / 김용규"
      },
      faq: [
        ["如何加入Daytint小工具？", "長按iPhone主畫面空白處，選擇「編輯」，再選擇「加入小工具」。搜尋Daytint，從iOS固定的三種小工具尺寸中選擇一種並加入。開啟應用程式或讓其回到前景時會重新整理。"],
        ["為何Daytint看不到我的行事曆？", "在iOS「設定」中找到Daytint並允許存取行事曆。Daytint使用Apple EventKit權限，只能使用裝置上已有的行事曆。"],
        ["如何使用Google日曆？", "在iOS設定的行事曆帳號中加入Google帳號並啟用其日曆。Daytint透過EventKit讀取iOS提供的行事曆，不會直接登入Google。"],
        ["如何調整照片？", "從「行事曆」開啟「自訂行事曆」，再點一下畫布上的照片。使用大小和旋轉滑桿，或直接以雙指縮放、旋轉照片。"],
        ["可以不填寫說明文字嗎？", "可以。說明文字是選填項目，可留空製作只有照片或裝飾的版面。"],
        ["包含哪些公眾假期？", "選擇國家顯示已核實的官方資料，支援年份在App中列出。美國和加拿大採用聯邦行事曆；英國和澳洲採用各地區共同日期；法國採用本土假日。不推測未公布年份，詳情見假期來源。新年份和變更透過 App 更新加入。"],
        ["如何尋找舊記錄或分享整個月份？", "使用封存搜尋尋找過去的記錄。在「行事曆」使用分享按鈕將月曆海報匯出為PNG；在「每月洞察」將整個月份分享為PDF。"],
        ["記錄儲存在哪裡？", "記錄、照片、貼圖和裝飾都儲存在裝置本機。應用程式透過共享App Group向Daytint小工具提供所選內容。"]
      ],
      privacy: [
        ["我們是誰", "Daytint由Yonggyu Kim / 김용규提供。如需支援或提出隱私權請求，請聯絡stockhub.kr@gmail.com。"],
        ["裝置上儲存的資料", "Daytint不需要應用程式帳號，也沒有廣告、分析工具或應用程式伺服器。記錄、照片、說明文字、貼圖和裝飾儲存在裝置本機。Apple App Group共享Daytint小工具所需的資料。依小工具設定，日記內容可能顯示在主畫面上。"],
        ["裝置備份", "依你的iCloud和裝置備份設定，Apple作業系統備份可能包含Daytint應用程式資料。Daytint本身不提供雲端備份功能。Apple依其條款和你的設定處理這些備份。"],
        ["行事曆", "若你授予選用的行事曆權限，Daytint會透過Apple EventKit讀取你選擇的裝置行事曆。若為事件啟用行事曆同步，Daytint會將標題、備註和日期傳送給你選擇的行事曆供應商。在Daytint中編輯或刪除該連結事件，也會更改所選行事曆中的事件。行事曆記錄可能依Apple、Google或其他帳號供應商的條款傳輸或儲存。Daytint不提供直接Google登入。"],
        ["照片", "Daytint只接收你透過系統照片選擇器選取的照片。匯入所選圖片時，應用程式內的副本會移除圖片中繼資料。"],
        ["公共假日資料", "1.0版本在裝置上內建已核實的官方假日資料，顯示假日不需網路請求。新年份和變更透過 App 更新加入。先前0.4 TestFlight版本仍可能向Nager.Date / Nager.Holidays請求所選國家與年份。"],
        ["刪除與保留", "在Daytint刪除記錄或照片後，若其他記錄不再使用該內容，就會移除。在Daytint刪除連結事件也會將其從所選行事曆刪除。解除安裝Daytint會移除本機應用程式資料，但你控制的Apple備份可能仍保留資料；解除安裝本身不會刪除已寫入外部行事曆的事件。若你傳送支援電郵，我們只會為處理查詢使用你提供的內容和聯絡資料，在支援所需期間保留，之後刪除。你可以透過電郵要求刪除。"],
        ["本網站", "本網站不使用分析、廣告、Cookie或遠端字型，由GitHub Pages託管。GitHub可能依《GitHub一般隱私權聲明》處理技術連線資訊。", "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement", "GitHub一般隱私權聲明"],
        ["變更與聯絡", "Daytint的功能或供應商改變時，我們可能更新本政策。上方生效日期表示目前版本。問題和刪除請求請傳送至stockhub.kr@gmail.com。"]
      ]
    },
    es: {
      common: {
        navSupport: "Ayuda", navPrivacy: "Privacidad", languageLabel: "Idioma", supportEyebrow: "Ayuda de Daytint", supportTitle: "Haz que cada día sea tuyo.", supportIntro: "Encuentra ayuda rápida sobre calendarios, fotos, widgets, exportaciones y más.", contactButton: "Contactar por correo", contactNote: "Indica tu versión de iOS y lo ocurrido. No incluyas información personal sensible.", featureCalendarTitle: "Calendario y archivo", featureCalendarBody: "Guarda entradas, fotos y decoraciones juntas y encuentra días anteriores con la búsqueda del archivo.", featureWidgetsTitle: "Tres tamaños de widget", featureWidgetsBody: "Añade Daytint en uno de los tres tamaños fijos de widget de iOS desde el editor de la pantalla de inicio.", featureExportTitle: "Exportación flexible", featureExportBody: "Comparte el póster del calendario mensual como PNG o la información mensual como PDF.", faqEyebrow: "Respuestas rápidas", faqTitle: "Preguntas frecuentes", stillNeedHelp: "¿Necesitas más ayuda?", contactTitle: "Estamos aquí para ayudarte.", contactBody: "Envíanos por correo una breve descripción y los pasos para reproducir el problema.", privacyEyebrow: "Privacidad en Daytint", privacyTitle: "Política de privacidad", effectiveDate: "En vigor desde el 3 de octubre de 2026", privacySummary: "Daytint no tiene cuenta de app, publicidad, analítica ni servidor propio. El contenido de tu diario permanece en el dispositivo salvo que elijas una función de iOS que envíe datos a otro servicio.", privacyContactButton: "Consultas de privacidad", footerOwner: "Yonggyu Kim / 김용규"
      },
      faq: [
        ["¿Cómo añado un widget de Daytint?", "Mantén pulsada una zona vacía de la pantalla de inicio del iPhone, elige Editar y luego Añadir widget. Busca Daytint, elige uno de los tres tamaños fijos de iOS y añádelo. Daytint se actualiza al abrir la app o volver a ponerla en primer plano."],
        ["¿Por qué Daytint no ve mi calendario?", "Abre Ajustes de iOS, busca Daytint y permite el acceso al calendario. Daytint usa el permiso EventKit de Apple y solo accede a calendarios disponibles en el dispositivo."],
        ["¿Cómo uso Google Calendar?", "Añade tu cuenta de Google en las cuentas de Calendario de Ajustes de iOS y activa sus calendarios. Daytint lee los calendarios que iOS expone mediante EventKit; no inicia sesión directamente en Google."],
        ["¿Cómo ajusto una foto?", "En Calendario, abre Personalizar calendario y toca la foto en el lienzo. Usa los controles de tamaño y rotación o pellizca y gira la foto directamente."],
        ["¿Puedo dejar el pie de foto vacío?", "Sí. Es opcional. Déjalo vacío para crear un diseño solo con foto o decoración."],
        ["¿Qué festivos se incluyen?", "Selecciona países para mostrar datos oficiales verificados. La app indica los años disponibles. EE. UU. y Canadá usan calendarios federales; Reino Unido y Australia, fechas comunes a todas las regiones; Francia, festivos metropolitanos. No se estiman años no publicados. Consulta las fuentes. Los nuevos años y cambios se añaden mediante actualizaciones de la app."],
        ["¿Cómo busco entradas antiguas o comparto un mes?", "Usa la búsqueda del archivo para encontrar entradas anteriores. En Calendario, usa el botón de compartir para exportar el póster mensual como PNG. En Información mensual, comparte el mes como PDF."],
        ["¿Dónde se guardan mis entradas?", "Las entradas, fotos, pegatinas y decoraciones se guardan localmente en tu dispositivo. El App Group compartido permite mostrar el contenido elegido en los widgets de Daytint."]
      ],
      privacy: [
        ["Quiénes somos", "Daytint es ofrecida por Yonggyu Kim / 김용규. Para ayuda o solicitudes de privacidad, escribe a stockhub.kr@gmail.com."],
        ["Datos guardados en tu dispositivo", "Daytint no requiere una cuenta de app y no tiene publicidad, analítica ni servidor propio. Las entradas, fotos, pies de foto, pegatinas y decoraciones se guardan localmente. Un App Group de Apple comparte los datos necesarios con los widgets de Daytint. Según tu configuración, el contenido del diario puede verse en la pantalla de inicio."],
        ["Copias de seguridad del dispositivo", "Las copias del sistema operativo de Apple pueden incluir datos de Daytint según tus ajustes de iCloud y de copia de seguridad. Daytint no ofrece una función propia de copia en la nube. Apple gestiona esas copias según sus términos y tus ajustes."],
        ["Calendarios", "Si das el permiso opcional de Calendario, Daytint usa Apple EventKit para leer los calendarios del dispositivo que selecciones. Si activas la sincronización de un evento, Daytint envía su título, notas y fecha al proveedor de calendario elegido. Las ediciones o eliminaciones de ese evento vinculado en Daytint también lo modifican en el calendario elegido. Los registros pueden transmitirse o almacenarse en Apple, Google u otro proveedor según sus términos. Daytint no ofrece inicio de sesión directo con Google."],
        ["Fotos", "Daytint solo recibe las fotos que eliges en el selector de fotos del sistema. Al importar una imagen seleccionada, se eliminan los metadatos de la copia guardada en la app."],
        ["Datos de festivos", "La versión 1.0 incluye datos oficiales verificados en el dispositivo y no hace solicitudes de red para mostrarlos. Los nuevos años y cambios se añaden mediante actualizaciones de la app. Las versiones anteriores 0.4 de TestFlight pueden seguir solicitando el país y año seleccionados a Nager.Date / Nager.Holidays."],
        ["Eliminación y conservación", "Al borrar una entrada o foto en Daytint, se elimina cuando deja de usarse en otra entrada. Al borrar un evento vinculado en Daytint también se elimina del calendario elegido. Desinstalar Daytint elimina sus datos locales, salvo las copias de Apple bajo tu control, pero no elimina por sí solo los eventos ya escritos en un calendario externo. Si escribes a soporte, usamos el contenido y los datos de contacto que proporciones solo para atender la consulta, los conservamos mientras sean necesarios para la ayuda y después los eliminamos. Puedes solicitar su eliminación por correo."],
        ["Este sitio web", "Este sitio no utiliza analítica, publicidad, cookies ni fuentes remotas. Está alojado en GitHub Pages, que puede procesar información técnica de conexión conforme a la Declaración general de privacidad de GitHub.", "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement", "Declaración general de privacidad de GitHub"],
        ["Cambios y contacto", "Podemos actualizar esta política si cambian las funciones o los proveedores de Daytint. La fecha de vigencia indica la versión actual. Envía preguntas y solicitudes de eliminación a stockhub.kr@gmail.com."]
      ]
    },
    fr: {
      common: {
        navSupport: "Assistance", navPrivacy: "Confidentialité", languageLabel: "Langue", supportEyebrow: "Assistance Daytint", supportTitle: "Donnez à chaque jour vos couleurs.", supportIntro: "Trouvez rapidement de l’aide sur les calendriers, photos, widgets, exports et plus encore.", contactButton: "Contacter l’assistance", contactNote: "Indiquez votre version d’iOS et ce qui s’est passé. N’incluez aucune donnée personnelle sensible.", featureCalendarTitle: "Calendrier et archives", featureCalendarBody: "Regroupez notes, photos et décorations, puis retrouvez vos journées avec la recherche dans les archives.", featureWidgetsTitle: "Trois tailles de widget", featureWidgetsBody: "Ajoutez Daytint dans l’une des trois tailles fixes de widget iOS depuis l’éditeur de l’écran d’accueil.", featureExportTitle: "Export souple", featureExportBody: "Partagez l’affiche du calendrier mensuel en PNG ou les informations mensuelles en PDF.", faqEyebrow: "Réponses rapides", faqTitle: "Questions fréquentes", stillNeedHelp: "Encore besoin d’aide ?", contactTitle: "Nous sommes à votre écoute.", contactBody: "Envoyez-nous une brève description et les étapes permettant de reproduire le problème.", privacyEyebrow: "La confidentialité chez Daytint", privacyTitle: "Politique de confidentialité", effectiveDate: "En vigueur le 3 octobre 2026", privacySummary: "Daytint ne comporte ni compte d’application, ni publicité, ni outil d’analyse, ni serveur applicatif. Le contenu de votre journal reste sur votre appareil, sauf si vous choisissez une fonction iOS qui envoie des données ailleurs.", privacyContactButton: "Questions de confidentialité", footerOwner: "Yonggyu Kim / 김용규"
      },
      faq: [
        ["Comment ajouter un widget Daytint ?", "Touchez de façon prolongée une zone vide de l’écran d’accueil de l’iPhone, choisissez Modifier, puis Ajouter un widget. Recherchez Daytint, choisissez l’une des trois tailles fixes iOS et ajoutez-la. Daytint s’actualise lorsque vous ouvrez l’app ou la ramenez au premier plan."],
        ["Pourquoi Daytint ne voit-il pas mon calendrier ?", "Ouvrez les Réglages iOS, trouvez Daytint et autorisez l’accès au calendrier. Daytint utilise l’autorisation EventKit d’Apple et ne travaille qu’avec les calendriers disponibles sur l’appareil."],
        ["Comment utiliser Google Agenda ?", "Ajoutez votre compte Google aux comptes Calendrier dans les Réglages iOS, puis activez ses calendriers. Daytint lit les calendriers fournis par iOS via EventKit et ne se connecte pas directement à Google."],
        ["Comment ajuster une photo ?", "Depuis Calendrier, ouvrez Personnaliser le calendrier et touchez la photo sur la toile. Utilisez les curseurs de taille et de rotation, ou pincez et faites pivoter directement la photo."],
        ["Puis-je laisser la légende vide ?", "Oui. La légende est facultative. Laissez-la vide pour une mise en page composée uniquement d’une photo ou de décorations."],
        ["Quels jours fériés sont inclus ?", "Choisissez les pays pour afficher les données officielles vérifiées. L’app indique les années disponibles. États-Unis et Canada : calendriers fédéraux ; Royaume-Uni et Australie : dates communes aux régions ; France : jours métropolitains. Les années non publiées ne sont pas estimées. Consultez les sources. Les nouvelles années et modifications sont ajoutées par les mises à jour de l’app."],
        ["Comment retrouver d’anciennes notes ou partager un mois ?", "Utilisez la recherche dans les archives. Dans Calendrier, utilisez le bouton de partage pour exporter l’affiche mensuelle en PNG. Dans Informations mensuelles, partagez le mois en PDF."],
        ["Où mes notes sont-elles stockées ?", "Les notes, photos, autocollants et décorations sont stockés localement sur votre appareil. L’App Group partagé permet d’afficher le contenu choisi dans les widgets Daytint."]
      ],
      privacy: [
        ["Qui sommes-nous ?", "Daytint est proposé par Yonggyu Kim / 김용규. Pour toute demande d’assistance ou de confidentialité, écrivez à stockhub.kr@gmail.com."],
        ["Données stockées sur votre appareil", "Daytint ne nécessite aucun compte d’application et ne comporte ni publicité, ni analyse, ni serveur applicatif. Les notes, photos, légendes, autocollants et décorations sont stockés localement. Un App Group Apple partage les données nécessaires aux widgets Daytint. Selon vos réglages, le contenu du journal peut être visible sur l’écran d’accueil."],
        ["Sauvegardes de l’appareil", "Les sauvegardes du système d’exploitation Apple peuvent inclure les données de Daytint selon vos réglages iCloud et de sauvegarde. Daytint ne fournit aucune sauvegarde cloud propre. Apple gère ces sauvegardes selon ses conditions et vos réglages."],
        ["Calendriers", "Si vous accordez l’autorisation facultative Calendrier, Daytint utilise Apple EventKit pour lire les calendriers de l’appareil que vous sélectionnez. Si vous activez la synchronisation d’un événement, Daytint envoie son titre, ses notes et sa date au fournisseur de calendrier choisi. Les modifications ou suppressions de cet événement lié dans Daytint modifient aussi le calendrier choisi. Ces données peuvent être transmises à ou stockées par Apple, Google ou un autre fournisseur selon ses conditions. Daytint ne propose pas de connexion directe à Google."],
        ["Photos", "Daytint reçoit uniquement les photos choisies dans le sélecteur de photos du système. Lors de l’importation, les métadonnées de l’image sont supprimées de la copie conservée dans l’app."],
        ["Données des jours fériés", "La version 1.0 inclut les données officielles vérifiées sur l’appareil et n’effectue aucune requête réseau pour les afficher. Les nouvelles années et modifications sont ajoutées par les mises à jour de l’app. Les anciennes versions 0.4 de TestFlight peuvent encore demander le pays et l’année sélectionnés à Nager.Date / Nager.Holidays."],
        ["Suppression et conservation", "Lorsque vous supprimez une note ou une photo dans Daytint, elle est retirée dès qu’aucune autre note ne l’utilise. La suppression d’un événement lié dans Daytint le supprime aussi du calendrier choisi. La désinstallation de Daytint efface ses données locales, sous réserve des sauvegardes Apple que vous contrôlez, mais ne supprime pas à elle seule les événements déjà écrits dans un calendrier externe. Si vous contactez l’assistance, nous utilisons le contenu et les coordonnées fournis uniquement pour traiter votre demande, les conservons le temps nécessaire à l’assistance, puis les supprimons. Vous pouvez demander leur suppression par e-mail."],
        ["Ce site web", "Ce site n’utilise ni outil d’analyse, ni publicité, ni cookie, ni police distante. Il est hébergé sur GitHub Pages. GitHub peut traiter des informations techniques de connexion conformément à sa Déclaration générale de confidentialité.", "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement", "Déclaration générale de confidentialité de GitHub"],
        ["Modifications et contact", "Nous pouvons mettre cette politique à jour lorsque les fonctions ou fournisseurs de Daytint changent. La date d’entrée en vigueur indique la version actuelle. Envoyez vos questions et demandes de suppression à stockhub.kr@gmail.com."]
      ]
    }
  };

  const supported = Object.keys(translations);
  const select = document.querySelector("#language-select");
  const page = document.body.dataset.page;

  function preferredLanguage() {
    const requested = new URLSearchParams(window.location.search).get("lang");
    if (supported.includes(requested)) return requested;
    const candidates = navigator.languages || [navigator.language || "en"];
    for (const candidate of candidates) {
      if (/^zh-(TW|HK|MO|Hant)/i.test(candidate)) return "zh-Hant";
      if (/^zh/i.test(candidate)) return "zh-Hans";
      const exact = supported.find((lang) => lang.toLowerCase() === candidate.toLowerCase());
      if (exact) return exact;
      const base = supported.find((lang) => lang === candidate.split("-")[0]);
      if (base) return base;
    }
    return "en";
  }

  function renderFaq(items) {
    const container = document.querySelector("#faq-list");
    if (!container) return;
    container.replaceChildren(...items.map(([question, answer]) => {
      const details = document.createElement("details");
      const summary = document.createElement("summary");
      const paragraph = document.createElement("p");
      summary.textContent = question;
      paragraph.textContent = answer;
      details.append(summary, paragraph);
      return details;
    }));
  }

  function renderPrivacy(items) {
    const container = document.querySelector("#privacy-sections");
    if (!container) return;
    container.replaceChildren(...items.map(([heading, body, url, linkText]) => {
      const section = document.createElement("section");
      section.className = "policy-section";
      const title = document.createElement("h2");
      const paragraph = document.createElement("p");
      title.textContent = heading;
      paragraph.textContent = body;
      section.append(title, paragraph);
      if (url) {
        const link = document.createElement("a");
        link.href = url;
        link.textContent = linkText;
        link.rel = "noopener";
        section.append(link);
      }
      return section;
    }));
  }

  function applyLanguage(language, updateUrl = false) {
    const locale = supported.includes(language) ? language : "en";
    const content = translations[locale];
    document.documentElement.lang = locale;
    document.querySelectorAll("[data-text]").forEach((element) => {
      const value = content.common[element.dataset.text];
      if (value) element.textContent = value;
    });
    if (page === "support") renderFaq(content.faq);
    if (page === "privacy") renderPrivacy(content.privacy);
    if (select) select.value = locale;
    document.querySelectorAll('a[href^="./"], a[href^="privacy.html"]').forEach((link) => {
      const target = link.getAttribute("href").startsWith("privacy.html") ? "privacy.html" : "./";
      link.href = `${target}?lang=${encodeURIComponent(locale)}`;
    });
    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", locale);
      window.history.replaceState(null, "", url);
    }
    document.title = page === "privacy" ? `${content.common.privacyTitle} · Daytint` : `${content.common.navSupport} · Daytint`;
  }

  if (select) {
    select.addEventListener("change", (event) => {
      const language = event.target.value;
      applyLanguage(language, true);
    });
  }

  applyLanguage(preferredLanguage());
})();
