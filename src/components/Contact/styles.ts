import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  padding: 48px;
  background: ${(props) => props.theme.colors.black};

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: clamp(1rem, 0.9rem + 1vw, 1.6rem);
    line-height: 64px;

    > p {
      max-width: 280px;
      color: ${(props) => props.theme.colors.white};

      &:first-child {
        margin-top: 32px;
      }

      a {
        width: 280px;
        max-height: 64px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 16px;
        padding: 16px;
        font-size: clamp(1rem, 1.05rem + 1vw, 1.6rem);
        border: ${(props) => props.theme.colors.white} 2px solid;
        border-radius: 48px;

        > span:first-child {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 48px;
          height: 64px;
          transition: all 0.2s;

          span {
            line-height: 64px;
            visibility: hidden;
            margin-left: -80px;
            font-weight: 600;
            letter-spacing: 1px;
          }

          svg {
            margin: 0 0 0 16px;
            transition: all 0.2s;
          }
        }

        &:hover {
          background: ${(props) => props.theme.colors.whatsapp};
          overflow: hidden;

          span {
            &:first-child {
              width: 100%;

              span {
                width: 90%;
                visibility: visible;
                margin-left: 0;
                transition: all 0.2s;
              }

              svg {
                -webkit-animation: slide-right 0.5s
                  cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
                animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
                  both;
                width: 48px;
                height: 48px;
              }
            }

            &:last-child {
              opacity: 0;
              width: 1px;
            }
          }
        }

        &:not(:hover) {
          svg {
            -webkit-animation: slide-left 0.5s
              cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
            animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          }

          span:last-child {
            transition: 1.2s;
            opacity: 1;
          }
        }
      }
    }

    > ul {
      margin-top: clamp(1rem, 1rem + 1vw, 6.4rem);
    }
  }

  /* ----------------------------------------------
 * Generated by Animista on 2021-5-8 16:49:42
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  /**
 * ----------------------------------------
 * animation slide-right
 * ----------------------------------------
 */
  @-webkit-keyframes slide-right {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(10%);
      transform: translateX(10%);
    }
  }
  @keyframes slide-right {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(10%);
      transform: translateX(10%);
    }
  }

  @-webkit-keyframes slide-left {
    0% {
      -webkit-transform: translateX(10%);
      transform: translateX(10%);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @keyframes slide-left {
    0% {
      -webkit-transform: translateX(10%);
      transform: translateX(10%);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
`;
