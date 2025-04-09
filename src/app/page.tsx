import React from 'react'

const Resume = () => {
  return (
    <div className={'max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg'}>
      {/* Header */}
      <div className={'flex justify-between items-center border-b pb-6 mb-6'}>
        <h1 className={'text-4xl font-bold text-gray-800'}>{'廖季威 (Wei)'}</h1>
        <ContactInfo />
      </div>

      {/* Professional Summary */}
      <div className={'mb-6'}>
        <h2
          className={'text-2xl font-semibold text-blue-500 border-b pb-2 mb-4'}
        >
          {'專業摘要'}
        </h2>
        <TextBlock
          content={
            '具備超過 6 年軟體開發經驗，從前端開發起步，並於 2021 年轉型為全端工程師。專精於 JavaScript 和 TypeScript 技術棧，特別是在 React 及其相關生態（Next.js）上有豐富經驗，後端則以 NestJS、Prisma 和 PostgreSQL 為主。'
          }
        />
        <TextBlock
          content={
            '在職涯中，多次擔任專案的發起人與技術推動者，曾成功導入 Swagger（OpenAPI）以改善後端文件管理，並推動 React Native 在公司內的應用，助力開發雙平台 App。對於 CSS 排版及 React 性能問題具有豐富解決經驗，後端則善於使用 ORM 優化 API 性能。'
          }
        />
        <TextBlock
          content={
            '具備協助團隊新人進行程式碼審查的經驗，對技術細節有高度敏感，樂於持續學習與技術分享。'
          }
        />
      </div>

      {/* Skills */}
      <div className={'mb-6'}>
        <h2
          className={'text-2xl font-semibold text-blue-500 border-b pb-2 mb-4'}
        >
          {'技能專長'}
        </h2>
        <ul className={'list-none pl-0'}>
          <ListItem
            icon={'💻'}
            label={'程式語言'}
            content={'TypeScript、JavaScript'}
          />
          <ListItem
            icon={'🔧'}
            label={'前端技術'}
            content={'React、Next.js、React Native、TailwindCSS'}
          />
          <ListItem
            icon={'⚙️'}
            label={'後端技術'}
            content={'NestJS、Prisma、PostgreSQL'}
          />
          <ListItem icon={'☁️'} label={'雲端技術'} content={'AWS、GCP'} />
          <ListItem
            icon={'🖥️'}
            label={'無伺服器架構'}
            content={'AWS Lambda、GCP Cloud Functions、Serverless Framework'}
          />
          <ListItem icon={'🔄'} label={'版本控制'} content={'Git、GitHub'} />
          <ListItem
            icon={'📄'}
            label={'文件管理'}
            content={'Swagger (OpenAPI)'}
          />
          <ListItem
            icon={'⚡'}
            label={'效能優化'}
            content={'React 性能調優、API 優化'}
          />
        </ul>
      </div>

      {/* Work Experience */}
      <div className={'mb-6'}>
        <h2
          className={'text-2xl font-semibold text-blue-500 border-b pb-2 mb-4'}
        >
          {'工作經歷'}
        </h2>
        <ul className={'list-none pl-0'}>
          <ListItem
            title={'瑞德感知'}
            subtitle={'前端工程師 (2017/03 - 2019/11)'}
            contentList={[
              '協助開發內部管理平台，包含以下功能：外部廠商 QA 回報、產品生命週期追蹤、料號管理。',
              '協助 EE Team 開發電流數據記錄工具，主要技術為 Socket 和 jQuery。',
              '串接政府平台 API，實現空氣品質實時回報功能。',
              '負責 DevOps 及 CI/CD 流程自動化',
            ]}
          />
          <ListItem
            title={'勝德研發'}
            subtitle={'前端工程師 (2019/12 - 2020/6)'}
            contentList={[
              '協助開發 QA 平台，主要技術為 React 結合 UI 工具包。平台功能包括透過網路控制智能插座開關、追蹤突波及當下電流量。',
              '協助開發手機 App，使用 React Native 技術，實現透過網路控制智能插座開關及電流量、突波監測。',
              '負責 DevOps 及 CI/CD 流程自動化',
            ]}
          />
          <ListItem
            title={'夯客實業股份有限公司'}
            subtitle={'前端工程師 (2020/6 - 2021/9)'}
            contentList={[
              '協助所有前端平台的建立與開發，包含官網、預約平台、商家後台及商家工具 App。',
              '導入 TypeScript 和 TailwindCSS，確立公司前端技術基礎，並使開發效率提高了 25%。',
              // '導入 TypeScript 和 TailwindCSS，確立公司前端技術基礎。',
              '推動 React Native 技術應用，開發雙平台 App，降低了 30% 的開發成本並縮短了 20% 的開發週期。',
              // '推動 React Native 技術應用，開發雙平台 App。',
              '負責前端 CI/CD 流程自動化及 CDN 服務串接，將部署時間從 2 小時縮短至 30 分鐘，提升了開發及部署的效率。',
              // '負責前端 CI/CD 流程自動化及 CDN 服務串接。',
              '建立前端 Serverless 服務，提升系統靈活性，並將伺服器成本降低了 15%。',
              // '建立前端 Serverless 服務，提升系統靈活性。',
              '負責 DevOps 及 CI/CD 流程自動化，成功實現每週 3 次自動化部署，降低了 40% 的部署錯誤率。',
              // '負責 DevOps 及 CI/CD 流程自動化',
            ]}
          />
          <ListItem
            title={'雲端互動'}
            subtitle={'全端工程師 (遠端) (2021/9 - 2022/4)'}
            contentList={[
              // '參與台積電福委會後台專案：使用 Next.js 技術構建後台系統，提升了 30% 的運營效率。',
              '參與台積電福委會後台專案：使用 Next.js 技術構建後台系統。',
              '參與 Amway 公司直播平台專案：採用 Vue.js 開發直播平台，並成功支持了 50% 的日活用戶數增長。',
              // '參與 Amway 公司直播平台專案：採用 Vue.js 開發直播平台。',
              '參與國外醫療保險專案：使用 Electron 和 Vue.js，開發 Windows 平台應用程式，提升了 40% 的業務效率。',
              // '參與國外醫療保險專案：使用 Electron 和 Vue.js，開發 Windows 平台應用程式。',
              '導入 TypeScript，協助新人進行程式碼審查，推動程式碼質量提升，減少了 25% 的回歸錯誤。',
              '開發 WYSIWYG 編輯器。',
            ]}
          />
          <ListItem
            title={'Funwoo 德載不動產'}
            subtitle={'全端工程師 (2022/4 - 至今)'}
            contentList={[
              '獨立負責前端、後端及 DevOps 工作，獨立推動自動化部署，將部署週期縮短了 50%。',
              '全權負責開發和維護後端 API 和前端界面，確保平台穩定運行，並為用戶提供穩定的服務。',
              '導入 OpenAPI (Swagger)，優化後端文件管理，提升了開發和維護的效率，文件錯誤率降低了 30%。',
              '提升 API 回應速度，將平均響應時間從 500ms 降低至 200ms，提升了系統穩定性。',
              '負責 DevOps 及 CI/CD 流程自動化，成功實現每週 2 次的自動化部署，並將部署錯誤率降低了 40%。',
              '在 GCP 上獨立部署系統，成功減少了 20% 的運營成本，並提升了系統擴展性與穩定性。',
              // '獨立負責前端、後端及 DevOps 工作。',
              // '導入 OpenAPI (Swagger)，優化後端文件管理。',
              // '提升 API 回應速度，增強系統穩定性。',
              // '負責 DevOps 及 CI/CD 流程自動化',
            ]}
          />
        </ul>
      </div>

      {/* 外包經歷 */}
      <div className={'mb-6'}>
        <h2
          className={'text-2xl font-semibold text-blue-500 border-b pb-2 mb-4'}
        >
          {'外包經歷'}
        </h2>
        <ul className={'list-none pl-0'}>
          <ListItem
            title={'勝德國際'}
            subtitle={'(2020/6 - 2022/6) 前端顧問'}
            contentList={[
              '持續合作 2 年，負責前端技術支援及展示產品開發。合作期間，公司知情，並利用個人休假時間進行開發。',
            ]}
          />
          <ListItem
            title={'夯客實業股份有限公司'}
            subtitle={'(2021/9 - 至今) 外包合作'}
            contentList={[
              '負責專案開發及技術支援，涵蓋前端及部分後端維護。合作期間，公司知情，並利用個人休假時間進行開發。',
            ]}
          />
          <ListItem
            title={'FeedMe'}
            subtitle={'(2024/3 - 2024/8) 外包合作'}
            contentList={[
              '使用 Vue.js 和 Module Federation 進行後台改版。合作期間，公司知情，並利用個人休假時間進行開發。',
            ]}
          />
        </ul>
      </div>

      {/* Project Experience */}
      <div className={'mb-6'}>
        <h2
          className={'text-2xl font-semibold text-blue-500 border-b pb-2 mb-4'}
        >
          {'專案經歷'}
        </h2>
        <ul className={'list-none pl-0'}>
          <ListItem
            title={'夯客預約平台'}
            subtitle={'專案負責人 技術：Next.js, TailwindCSS, Line LIFF'}
            contentList={[
              '專案目標：打造線上預約及管理系統，結合 Line 平台，提升用戶體驗及流量轉化。',
              '技術挑戰及解決方案：使用 Next.js 開發高效能前端平台，導入 TailwindCSS 提升開發效率和設計一致性。成功串接 Line LIFF 平台，實現用戶透過 Line 直接進行預約及查看狀態，解決跨平台互通問題。',
              '專案成果：平台上線後，日流量約 8000~10000，成為公司主要面向 C 端的平台及用戶數據收集來源。',
            ]}
          />
          <ListItem
            title={'夯客 B 端手機應用'}
            subtitle={'專案負責人 技術：React Native、原生應用技術'}
            contentList={[
              '專案目標：打造商家管理平台，支援顧客管理、訂單管理及資源管理（如設計師、老師等）。',
              '技術挑戰及解決方案：使用 React Native 開發雙平台及 iPad 適用應用程式，降低開發及維護成本。導入 expo-update 即時更新工具，讓使用者隨時體驗最新功能。導入 i18n，為未來國外業務拓展提供技術基礎。',
              '專案成果：降低前端技術成本，解決商家只能使用 iOS 設備管理的痛點，增加設備靈活性。',
            ]}
          />
          <ListItem
            title={'Funwoo Backend 重構'}
            subtitle={
              '專案負責人 技術：Nest.js, PostgreSQL, Prisma.js, OpenAPI'
            }
            contentList={[
              '專案目標：重構後端架構，提升系統穩定性及可維護性，導入 TypeScript 強化型別安全。',
              '技術挑戰及解決方案：微服務化架構設計，使用 Nest.js 和 Prisma.js 打造高效能 API。導入 OpenAPI (Swagger) 自動生成 API 文件，減少文件維護成本。前端透過 Swagger Config 自動產生 API Instance，顯著降低前端串接成本。',
              '專案成果：系統穩定性提升，API 開發效率及文件管理更為一致。',
            ]}
          />
          <ListItem
            title={'FeedMe Backyard Platform'}
            subtitle={'專案負責人 技術：Vue.js, Webpack'}
            contentList={[
              '專案目標：取代微服務 iframe 嵌入方式，導入 Module Federation 技術，提升整合性及安全性。',
              '技術挑戰及解決方案：設計 Module Federation 架構，減少跨域風險及操作隔離問題。規劃權限共享機制，建立全局權限 Store，避免重複登入。',
              '專案成果：成功提升平台穩定性及微服務整合效率，安全性顯著增強。',
            ]}
          />
        </ul>
      </div>

      {/* Education */}
      <div>
        <h2
          className={'text-2xl font-semibold text-blue-500 border-b pb-2 mb-4'}
        >
          {'學歷'}
        </h2>
        <p className={'text-gray-700'}>
          <span className={'font-bold text-blue-500'}>{'勤益科技大學'}</span>{' '}
          {'|'}
          {'機械工程系 (2006 - 2010)'}
        </p>
        <p className={'text-gray-700'}>
          {
            '主修機械工程，培養嚴謹的邏輯思考及數據分析能力，具備解決實際工程問題的經驗。學習過工程力學、流體力學及製造技術等核心課程，具備扎實的工業技術基礎。畢業後進入機械相關領域工作，期間發現對軟體開發的濃厚興趣，開始自學程式設計。利用業餘時間學習程式語言及網頁開發技術，成功轉型為全端工程師，具備跨領域技術融合及快速學習能力。在專案開發中，善於運用工程背景處理資料及流程邏輯，將工程思維與軟體技術相結合，提供高效解決方案。'
          }
        </p>
      </div>
    </div>
  )
}

export default Resume

// ContactInfo component
const ContactInfo = () => {
  return (
    <div className={'text-right'}>
      <a href={'tel:0978453532'} className={'block text-blue-500 text-lg mb-2'}>
        {'📞 0978453532'}
      </a>
      <a
        href={'mailto:sp.weiliao@gmail.com'}
        className={'block text-blue-500 text-lg mb-2'}
      >
        {'📧 sp.weiliao@gmail.com'}
      </a>
      <a
        href={'https://www.linkedin.com/in/ji-wei-liao-51321b196/'}
        className={'block text-blue-500 text-lg mb-2'}
      >
        {'🔗 LinkedIn'}
      </a>
      <a
        href={'https://github.com/sp0033212000'}
        className={'block text-blue-500 text-lg'}
      >
        {'🔗 GitHub'}
      </a>
    </div>
  )
}

// ListItem component
const ListItem: React.FC<{
  title?: string
  subtitle?: string
  contentList?: string[]
  icon?: string
  label?: string
  content?: string
}> = ({ title, subtitle, contentList, icon, label, content }) => {
  return (
    <li
      className={
        'mb-6 p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors'
      }
    >
      {/* Container for icon and title to ensure they are in the same line */}
      <div className={'flex items-center'}>
        {/* Render icon and label together on the same line */}
        {icon && label && (
          <div className={'flex items-center mr-3'}>
            <span className={'text-blue-500 text-xl flex-shrink-0'}>
              {icon}
            </span>
            <span className={'ml-2 font-bold text-blue-500'}>{label}</span>
          </div>
        )}
        {/* Render title and subtitle if available */}
        {title && (
          <div className={'flex flex-col'}>
            <span className={'font-semibold text-lg text-gray-800'}>
              {title}
            </span>
            {subtitle && (
              <span className={'text-sm text-gray-500'}>{subtitle}</span>
            )}
          </div>
        )}
      </div>

      {/* Render content if available */}
      {content && <div className={'mt-2 text-gray-700'}>{content}</div>}

      {/* Render content list if available */}
      {contentList && (
        <ul className={'list-outside list-disc text-gray-700 mt-2 ml-6'}>
          {contentList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </li>
  )
}

// TextBlock component
const TextBlock: React.FC<{ content: string }> = ({ content }) => {
  return <p className={'text-gray-700 mb-4'}>{content}</p>
}
