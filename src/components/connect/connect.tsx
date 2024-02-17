import Link from "next/link";
import styles from "./connect.module.css";

export default function Connect() {
  return (
    <section
      className={`max-w-[70rem] mx-auto mb-36 px-5 lg:px-7 lg:text-lg ${styles.connect}`}
    >
      <h2 className={"text-2xl md:text-4xl text-text"}>Let&apos;s connect</h2>
      <small className={"text-text-dark"}>
        I don&apos;t bite. I promise you.
      </small>
      <div
        className={
          "gap-6 grid grid-cols-[1fr] md:grid-cols-[repeat(2,_1fr)] mt-8"
        }
      >
        <Link
          className={
            "border-2 border-bg-light duration-500 flex hover:bg-highlight hover:text-bg-light items-center justify-between max-w-[28rem] p-3 rounded-md text-text transition-colors"
          }
          href={"mailto:officialbobmoriasi@gmail.com?subject=Inquiry"}
        >
          <p>Using words</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-[36px] w-[32px] ${styles.icons}`}
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              fillRule="nonzero"
              d="M28.3180348 14.8612772 5.06626821 3.13779665c-1.16908323-.52104358-2.46806461.52104358-1.94847206 1.69339164l3.24745343 8.72748001 14.80838762 2.474957-14.80838762 2.474957-3.24745343 8.72748c-.38969441 1.1723481.77938883 2.2144352 1.94847206 1.5631307L28.3180348 17.0757125c.9092869-.3907827.9092869-1.6933917 0-2.2144353Z"
            ></path>
          </svg>
        </Link>
        <Link
          className={
            "border-2 border-bg-light duration-500 flex hover:bg-highlight hover:text-bg-light items-center justify-between max-w-[28rem] p-3 rounded-md text-text transition-colors"
          }
          href={"https://open.spotify.com/user/315t4dtdussxpafdwl4h6vehulfq"}
        >
          <p>Using music</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className={`h-[36px] w-[32px] ${styles.icons}`}
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M16 1c8.2846154 0 15 6.71538462 15 15 0 8.2846154-6.7153846 15-15 15-8.28461538 0-15-6.7153846-15-15C1 7.71538462 7.71538462 1 16 1Zm6.48 20.7882692c-3.9115385-2.384423-8.7605769-2.939423-14.41442308-1.65-.23913803.0536583-.44704258.200384-.57772426.4077207-.13068167.2073367-.17336991.4581961-.11862189.697087.11445697.4973249.61033173.8077631 1.10769231.6934616 5.16634612-1.1769231 9.55326922-.6969231 13.03846152 1.4278846.4359217.2661062 1.0050094.1287402 1.2715385-.3069231.2665384-.435.1292307-1.0038462-.3069231-1.2692308Zm2.1865385-4.8986538c-4.6869231-2.6209616-11.5419231-3.3588462-17.05730773-1.8357692C6.98442308 15.2269231 6.63134615 15.8275 6.82 16.3975c.18980769.5682692.85153846.8896154 1.4775.7176923 4.8271154-1.3338461 11.0492308-.6721154 15.1298077 1.6101923.5567308.3109616 1.2853846.1523077 1.6286538-.3548077.3421154-.5059615.1667308-1.1694231-.389423-1.4809615ZM26.275 12.1380769c-5.5638462-3.42923075-14.3676923-3.75115382-19.66384615-2.0821154-.74192308.2336539-1.15961539 1.0465385-.93461539 1.8161539.22384616.7690384 1.00730769 1.2028846 1.74807692.9698077 4.61365382-1.4538462 12.58615382-1.1798077 17.41903842 1.8.6646154.4107692 1.5259616.1828846 1.9211539-.5094231.3951923-.6905769.1765385-1.5842308-.4898077-1.9944231Z"
            ></path>
          </svg>
        </Link>
        <Link
          className={
            "border-2 border-bg-light duration-500 flex hover:bg-highlight hover:text-bg-light items-center justify-between max-w-[28rem] p-3 rounded-md text-text transition-colors"
          }
          href={"https://instagram.com/bobbrysonn"}
        >
          <p>Using photos</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className={`h-[36px] w-[32px] ${styles.icons}`}
          >
            <path
              fill="currentColor"
              fillRule="nonzero"
              d="M15.9999702 3.70275742c4.0051921 0 4.479568.0152429 6.0612575.08740853 1.4624852.06674725 2.2567238.31111004 2.7853429.51647245.7001018.27210966 1.1998429.59721222 1.7247108 1.12208018.5248679.52486797.8499706 1.02460896 1.1220206 1.72471077.205422.52861915.4497848 1.32285781.5165321 2.78528346.0721655 1.58174899.0874085 2.05612489.0874085 6.06131699 0 4.005192-.015243 4.479568-.0874085 6.0612574-.0667473 1.4624852-.3111101 2.2567239-.5165321 2.785343-.27205.7001018-.5971527 1.1998428-1.1220206 1.7247107-.5248679.524868-1.024609.8499706-1.7247108 1.1220207-.5286191.2054219-1.3228577.4497848-2.7853429.516532-1.5814513.0721656-2.0558272.0874085-6.0612575.0874085s-4.4798061-.0152429-6.06125739-.0874085c-1.46248519-.0667472-2.25672385-.3111101-2.78528346-.516532-.70016135-.2720501-1.19990235-.5971527-1.72477031-1.1220207-.52486797-.5248679-.84997052-1.0246089-1.12202064-1.7247107-.20542194-.5286191-.44978475-1.3228578-.51653199-2.7852835-.07216564-1.5817489-.08740853-2.0561249-.08740853-6.0613169 0-4.0051921.01524289-4.479568.08740853-6.06125744.06674724-1.4624852.31111005-2.25672386.51653199-2.78534301.27205012-.70010181.59715267-1.1998428 1.12202064-1.72471077C5.953527 4.90385062 6.453268 4.57874806 7.15342935 4.3066384c.52855961-.20536241 1.32279827-.4497252 2.78522392-.51647245 1.58174903-.07216563 2.05612483-.08740853 6.06131693-.08740853m0-2.70275742c-4.0737851 0-4.5845415.01726735-6.18445102.09026657-1.59663465.07288014-2.68697863.3264125-3.6411487.69724378-.9863826.38333521-1.8228965.89623511-2.65679053 1.73012914-.83389403.83389403-1.34679393 1.67040792-1.73012915 2.65679053-.37083127.95417008-.62436364 2.04451405-.69724377 3.64114871C1.01720781 11.4154287 1 11.9262446 1 16.0000298s.01720781 4.584601.09020703 6.184451c.07288013 1.5966347.3264125 2.6869787.69724377 3.6411487.38333522.986323.89623512 1.8228965 1.73012915 2.6567905.83389403.8338941 1.67040793 1.346794 2.65679053 1.7301292.95417007.3708313 2.04451405.6243637 3.6411487.6972437C11.4154287 30.9827922 11.9261851 31 15.9999702 31c4.0737852 0 4.5846011-.0172078 6.184451-.0902071 1.5966347-.07288 2.6869788-.3264124 3.6411488-.6972437.9863825-.3833352 1.8228964-.8962351 2.6567905-1.7301292.8338941-.833894 1.346794-1.6704079 1.7301292-2.6567905.3708313-.95417.6243636-2.044514.6972437-3.6411487C30.9827327 20.5846308 31 20.073815 31 16.0000298s-.0172673-4.5846011-.0902666-6.18445107c-.0728801-1.59663466-.3264124-2.68697863-.6972437-3.64114871-.3833352-.98638261-.8962351-1.8228965-1.7301292-2.65679053s-1.670408-1.34679393-2.6567905-1.73012914c-.95417-.37083128-2.0445141-.62436364-3.6411488-.69724378C20.5845713 1.01726735 20.0737554 1 15.9999702 1Zm0 7.29730213c-4.2540801 0-7.70272761 3.44864747-7.70272761 7.70272767 0 4.2540801 3.44864751 7.7027277 7.70272761 7.7027277 4.2540802 0 7.7027277-3.4486476 7.7027277-7.7027277 0-4.2540802-3.4486475-7.70272767-7.7027277-7.70272767Zm0 12.70275747c-2.7614068 0-5.0000297-2.238623-5.0000297-5.0000298C10.9999405 13.2386229 13.2385634 11 15.9999702 11 18.7613771 11 21 13.2386229 21 16.0000298c0 2.7614068-2.2386229 5.0000298-5.0000298 5.0000298Zm9.8070225-13.00707967c0 .99412314-.8058495 1.80003215-1.7999727 1.80003215-.9941231 0-1.8000321-.80590901-1.8000321-1.80003215 0-.99412315.805909-1.79997262 1.8000321-1.79997262.9941232 0 1.7999727.80584947 1.7999727 1.79997262Z"
            ></path>
          </svg>
        </Link>
        <Link
          className={
            "border-2 border-bg-light duration-500 flex hover:bg-highlight hover:text-bg-light items-center justify-between max-w-[28rem] p-3 rounded-md text-text transition-colors"
          }
          href={"https://twitter.com/bobbrysonn"}
        >
          <p>Using thoughts</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            className={`h-[36px] w-[32px] ${styles.icons}`}
            viewBox="0 0 50 50"
          >
            <path
              fill="currentColor"
              d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"
            ></path>
          </svg>
        </Link>
      </div>
    </section>
  );
}
