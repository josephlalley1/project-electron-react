import React, { Component } from 'react';
import '../style.css';

class App extends Component {
  render() {
    return (
      <div>
      <div class="sidebar">
            <div class="icon-container">
              <img src={process.env.PUBLIC_URL + '/img/side-icon.svg'} class="side-icon1" alt=""></img>
            </div>
            <div class="icon-container">
              <img src={process.env.PUBLIC_URL + '/img/side-icon.svg'} class="side-icon2" alt=""></img>
            </div>
            <div class="icon-container">
              <img src={process.env.PUBLIC_URL + '/img/side-icon.svg'} class="side-icon2" alt=""></img>
            </div>
            <div class="profile-section">
              <img src={process.env.PUBLIC_URL + '/img/profile-pic2.jpg'} class="profile-pic" id="profile" alt=""></img>
            </div>
          </div>

          <div class="profile-popup" id="profile-popup">
            <h4 class="profile-name popup-spacing">Exhale</h4>
            <hr></hr>
            <p class="entry-text popup-spacing">My Account</p>
            <p class="entry-text popup-spacing">Check for updates</p>
            <p class="entry-text popup-spacing">Restart</p>
            <hr></hr>
            <p class="entry-text popup-spacing declined">Log out</p>
          </div>

          <div class="main-content">
            <div class="header">
              <div class="sound-icons">
                <img src={process.env.PUBLIC_URL + '/img/bell-icon.svg'} class="header-icons" alt=""></img>
                <img src={process.env.PUBLIC_URL + '/img/sound-icon.svg'} class="header-icons" alt=""></img>
              </div>

              <div class="header-logo">
                <img src={process.env.PUBLIC_URL + '/img/logo.svg'} alt=""></img>
              </div>

              <div class="header-ellipse">
                <svg width="15" height="15" class="minimise-button circle-spacing" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" />
                </svg>
                <svg width="15" height="15" class="exit-button" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" />
                </svg>
              </div>
            </div>

            <div class="control-menu">
              <div class="menu-title">
                <h2>Dashboard</h2>
                <img src={process.env.PUBLIC_URL + '/img/line-breaker.svg'} alt=""></img>
              </div>

              <div class="main-menu">
                <div class="control-box">
                  <svg width="15" height="15" class="import-icon control-icon" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.56521 14C1.88461 13.9979 1.23255 13.7263 0.751774 13.2446C0.271 12.7629 0.000682298 12.1104 0 11.4298L0 2.56636C0.000208223 2.12885 0.112221 1.69865 0.325408 1.31658C0.538595 0.934512 0.845885 0.613253 1.21812 0.383289C1.59035 0.153325 2.01518 0.0222832 2.45228 0.00260007C2.88939 -0.017083 3.32428 0.0752451 3.71567 0.270823L12.5799 4.70126C13.0066 4.91444 13.3655 5.24225 13.6163 5.64793C13.8671 6.05362 14 6.52114 14 6.99809C14 7.47504 13.8671 7.94257 13.6163 8.34825C13.3655 8.75394 13.0066 9.08174 12.5799 9.29492L3.71567 13.728C3.35873 13.9073 2.9647 14.0005 2.56521 14ZM2.56521 2.08186C2.47357 2.08256 2.3839 2.10857 2.3061 2.157C2.23544 2.19957 2.17689 2.25957 2.13606 2.33124C2.09523 2.40292 2.07348 2.48387 2.0729 2.56636V11.4298C2.07362 11.5138 2.09559 11.5962 2.13676 11.6694C2.17793 11.7426 2.23697 11.8042 2.30836 11.8484C2.37975 11.8927 2.46118 11.9181 2.54506 11.9224C2.62894 11.9266 2.71253 11.9096 2.78805 11.8729L11.6601 7.43984C11.7426 7.39925 11.8121 7.33636 11.8607 7.25828C11.9094 7.1802 11.9351 7.09007 11.9351 6.99809C11.9351 6.90612 11.9094 6.81598 11.8607 6.73791C11.8121 6.65983 11.7426 6.59693 11.6601 6.55634L2.78805 2.12332C2.71987 2.08828 2.64446 2.06965 2.56781 2.06891L2.56521 2.08186Z"/>
                  </svg>
                  <svg width="15" height="15" class="import-icon control-icon" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5839 13.6475H3.33849C2.62267 13.6475 1.93596 13.3641 1.42853 12.8592C0.921094 12.3543 0.634225 11.6691 0.630646 10.9532L0.630646 2.70785C0.630646 1.98968 0.915936 1.30093 1.42376 0.79311C1.93157 0.28529 2.62033 0 3.33849 0L11.5839 0C12.2997 0.00357913 12.985 0.290448 13.4899 0.797881C13.9948 1.30531 14.2782 1.99202 14.2782 2.70785V10.9668C14.2711 11.6779 13.9845 12.3577 13.4804 12.8593C12.9763 13.3609 12.295 13.644 11.5839 13.6475ZM3.33849 2.16628C3.19486 2.16628 3.05711 2.22333 2.95554 2.3249C2.85398 2.42646 2.79692 2.56421 2.79692 2.70785V10.9532C2.80045 11.0945 2.85907 11.2288 2.96025 11.3275C3.06144 11.4261 3.19717 11.4813 3.33849 11.4813H11.5974C11.7364 11.4778 11.8687 11.4211 11.967 11.3228C12.0653 11.2245 12.122 11.0922 12.1254 10.9532V2.70785C12.1254 2.56421 12.0684 2.42646 11.9668 2.3249C11.8653 2.22333 11.7275 2.16628 11.5839 2.16628H3.33849Z"/>
                  </svg>
                  <svg width="15" height="15" class="import-icon control-icon" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.73612 9.49912L4.10168 8.1452C4.11111 7.98698 4.17974 7.83811 4.29393 7.72819L11.4129 0.611973C11.6466 0.352025 11.9736 0.195039 12.3226 0.175256C12.6716 0.155472 13.0143 0.274496 13.2759 0.506367C13.5069 0.767817 13.6254 1.10989 13.6056 1.45823C13.5859 1.80657 13.4294 2.13303 13.1703 2.36666L6.04862 9.47746C5.93764 9.59015 5.78938 9.65851 5.63161 9.66971L4.27769 10.0326C4.20595 10.0377 4.13394 10.0275 4.06647 10.0026C3.99899 9.97768 3.93759 9.9387 3.88635 9.88823C3.83511 9.83776 3.79521 9.77696 3.76931 9.70986C3.7434 9.64277 3.73209 9.57093 3.73612 9.49912ZM11.7595 10.9532C11.756 11.0922 11.6993 11.2245 11.601 11.3228C11.5027 11.4211 11.3704 11.4778 11.2314 11.4813H2.98604C2.84473 11.4813 2.70899 11.4261 2.60781 11.3275C2.50662 11.2288 2.44801 11.0945 2.44447 10.9532V2.70785C2.44447 2.56421 2.50153 2.42646 2.6031 2.3249C2.70466 2.22333 2.84241 2.16628 2.98604 2.16628H7.35921L9.52549 0H2.98604C2.26788 0 1.57913 0.28529 1.07131 0.79311C0.563488 1.30093 0.278198 1.98968 0.278198 2.70785L0.278198 10.9532C0.281777 11.6691 0.568647 12.3543 1.07608 12.8592C1.58351 13.3641 2.27022 13.6475 2.98604 13.6475H11.245C11.9585 13.644 12.6417 13.359 13.1462 12.8545C13.6507 12.35 13.9357 11.6667 13.9393 10.9532V4.11051L11.773 6.27679L11.7595 10.9532Z"/>
                  </svg>
                  <svg width="15" height="15" class="import-icon control-icon" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0349 0H3.18949C2.59291 0.000716608 2.02098 0.238023 1.59914 0.659865C1.17729 1.08171 0.939987 1.65364 0.93927 2.25022L0.93927 9.09565C0.939985 9.68889 1.17578 10.2577 1.595 10.6774C2.01423 11.0971 2.58272 11.3336 3.17595 11.335H10.0349C10.6286 11.3343 11.1978 11.0982 11.6176 10.6783C12.0374 10.2585 12.2736 9.68935 12.2743 9.09565V2.23668C12.2729 1.64345 12.0364 1.07496 11.6167 0.655734C11.1969 0.236508 10.6282 0.000714738 10.0349 0V0ZM10.4736 4.27298V9.09565C10.474 9.15336 10.4629 9.21056 10.4409 9.26395C10.419 9.31733 10.3867 9.36583 10.3459 9.40664C10.3051 9.44745 10.2566 9.47975 10.2032 9.50166C10.1498 9.52358 10.0926 9.53468 10.0349 9.53432H3.17595C3.05961 9.53432 2.94803 9.48811 2.86576 9.40584C2.7835 9.32357 2.73728 9.212 2.73728 9.09565V2.25022C2.73728 2.19083 2.74898 2.13203 2.7717 2.07717C2.79443 2.0223 2.82774 1.97245 2.86973 1.93046C2.91172 1.88847 2.96157 1.85516 3.01644 1.83243C3.0713 1.80971 3.1301 1.79801 3.18949 1.79801H10.0349C10.1513 1.79801 10.2628 1.84423 10.3451 1.92649C10.4274 2.00876 10.4736 2.12034 10.4736 2.23668V4.27298ZM15.6943 5.32092V11.6437C15.6922 12.3806 15.3979 13.0866 14.8761 13.6068C14.3543 14.1271 13.6475 14.4193 12.9107 14.4193H6.59596C6.07863 14.4187 5.57747 14.239 5.17763 13.9107C4.7778 13.5824 4.50394 13.1259 4.4026 12.6186H12.0983C12.573 12.6186 13.0285 12.4305 13.3649 12.0956C13.7014 11.7607 13.8915 11.3061 13.8936 10.8314V3.12756C14.4007 3.22937 14.857 3.50336 15.1851 3.90309C15.5133 4.30283 15.6932 4.80373 15.6943 5.32092Z"/>
                  </svg>
                  <svg width="15" height="15" class="import-icon control-icon" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.4606 0.859076H3.33449C2.72544 0.85779 2.13476 1.06803 1.66295 1.45403C1.19115 1.84002 0.867368 2.37792 0.746704 2.97621H12.0484C11.9277 2.37792 11.6039 1.84002 11.1321 1.45403C10.6603 1.06803 10.0696 0.85779 9.4606 0.859076Z"/>
                    <path d="M9.98919 4.67999V11.354C9.98869 11.4941 9.93293 11.6283 9.83409 11.7274C9.73524 11.8264 9.60132 11.8823 9.46154 11.8828H3.33448C3.19469 11.8823 3.06077 11.8264 2.96192 11.7274C2.86308 11.6283 2.80732 11.4941 2.80682 11.354V4.67999H0.694305V11.354C0.696566 12.0551 0.975451 12.7268 1.47009 13.2225C1.96473 13.7182 2.63495 13.9977 3.33448 14H9.45677C10.1563 13.9977 10.8265 13.7182 11.3212 13.2225C11.8158 12.7268 12.0947 12.0551 12.0969 11.354V4.67999H9.98919Z"/>
                    <path d="M6.82518 0H5.87274C5.60973 0 5.39651 0.213677 5.39651 0.477262V1.43178C5.39651 1.69537 5.60973 1.90905 5.87274 1.90905H6.82518C7.08819 1.90905 7.3014 1.69537 7.3014 1.43178V0.477262C7.3014 0.213677 7.08819 0 6.82518 0Z"/>
                  </svg>
                </div>
                <div class="task-box">
                  <div class="task-controls">
                    <img src={process.env.PUBLIC_URL + '/img/purple-circle.svg'} alt=""></img>
                    <h3 class="task-title">All Tasks</h3>
                    <svg width="15" height="15" class="selected-tasks controls-spacing" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="7" cy="7" r="7"/>
                    </svg>
                    <h3 class="task-title">1 Selected Task</h3>
                  </div>
                </div>
              </div>

              <div class="ie-box">
                <div class="ie-icon-box">
                  <svg width="15" height="15" class="import-icon" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.5736 7.09565C14.4577 5.64756 12.2566 5.77789 12.2566 7.23467V11.4254C12.2567 11.5766 12.1977 11.7218 12.0921 11.83C11.9866 11.9382 11.843 12.0009 11.6919 12.0047H2.8817C2.7306 12.0009 2.58697 11.9382 2.48145 11.83C2.37593 11.7218 2.3169 11.5766 2.31695 11.4254V7.24915C2.31695 5.80106 0.124536 5.66204 0 7.11303C0 7.19122 0 8.06008 0 8.13828V11.4254C0 11.8058 0.074912 12.1824 0.220459 12.5338C0.366006 12.8851 0.579337 13.2044 0.848273 13.4734C1.39141 14.0165 2.12807 14.3216 2.89618 14.3216H11.7295C12.4951 14.3178 13.2281 14.011 13.7681 13.4683C14.3081 12.9255 14.6113 12.1911 14.6112 11.4254V8.118C14.5823 8.0427 14.5794 7.17095 14.5736 7.09565ZM3.65498 5.98641C3.47808 5.80461 3.37742 5.56203 3.37366 5.30839C3.36989 5.05475 3.46329 4.80928 3.63471 4.62231C3.72005 4.53031 3.82323 4.45667 3.93797 4.40586C4.05271 4.35505 4.17659 4.32815 4.30206 4.3268C4.42754 4.32544 4.55197 4.34966 4.66778 4.39798C4.78359 4.4463 4.88834 4.5177 4.97564 4.60783L6.35712 5.98062V0.944156C6.35712 0.69375 6.4566 0.4536 6.63366 0.276537C6.81072 0.0994733 7.05087 0 7.30128 0C7.55168 0 7.79183 0.0994733 7.9689 0.276537C8.14596 0.4536 8.24543 0.69375 8.24543 0.944156V5.98062L9.60954 4.60783C9.69446 4.51762 9.79672 4.44547 9.91018 4.39571C10.0236 4.34595 10.146 4.31959 10.2699 4.31821C10.3971 4.31734 10.5231 4.3426 10.6402 4.39242C10.7573 4.44223 10.8629 4.51555 10.9505 4.60783C11.1219 4.7948 11.2153 5.04027 11.2115 5.29391C11.2078 5.54755 11.1071 5.79013 10.9302 5.97193C10.9302 5.97193 9.32571 7.54166 8.5756 8.18751C7.59669 9.0303 7.00008 9.03899 5.9922 8.16724C4.98433 7.29549 3.65498 5.98641 3.65498 5.98641Z" fill="#32333E"/>
                  </svg>
                </div>
                <div class="ie-icon-box">
                  <img src={process.env.PUBLIC_URL + '/img/export.svg'} alt=""></img>
                </div>
              </div>
            </div>

            <div class="table-heading">
              <div class="th-checkbox">
                <img src={process.env.PUBLIC_URL + '/img/checkbox-grey.svg'} alt=""></img>
                <img src={process.env.PUBLIC_URL + '/img/down-arrow.svg'} class="arrow-spacing" alt=""></img>
              </div>
              <div class="th-id">
                <h4 class="th-text">ID</h4>
              </div>
              <div class="th-store">
                <h4 class="th-text">STORE</h4>
              </div>
              <div class="th-product">
                <h4 class="th-text">PRODUCT</h4>
              </div>
              <div class="th-size">
                <h4 class="th-text">SIZE</h4>
              </div>
              <div class="th-billing">
                <h4 class="th-text">BILLING</h4>
              </div>
              <div class="th-status">
                <h4 class="th-text">STATUS</h4>
              </div>
            </div>

            <div class="table-contents">
              <div class="table-entries">
                <div class="entry-check">
                  <img src={process.env.PUBLIC_URL + '/img/checkbox-purple.svg'} alt=""></img>
                </div>
                <div class="entry-id">
                  <p class="entry-text">A4C</p>
                </div>
                <div class="entry-store">
                  <p class="entry-text">Undefeated</p>
                </div>
                <div class="entry-product">
                  <p class="entry-text">Nike Air Jordan 1 High OG Shattered Backboard</p>
                </div>
                <div class="entry-size">
                  <p class="entry-text">Any</p>
                </div>
                <div class="entry-billing">
                  <p class="entry-text">Dad's Visa</p>
                </div>
                <div class="entry-status">
                  <p class="entry-text submitting">Submitting Payment</p>
                </div>
                <div class="entry-actions" id="task-actions">
                  <div class="task-icon-box">
                    <img src={process.env.PUBLIC_URL + '/img/play-icon.svg'} class="icon-spacing" alt=""></img>
                  </div>
                  <div class="task-icon-box">
                    <img src={process.env.PUBLIC_URL + '/img/edit-icon.svg'} class="icon-spacing" alt=""></img>
                  </div>
                  <div class="task-icon-box">
                    <img src={process.env.PUBLIC_URL + '/img/delete-icon.svg'} class="icon-spacing" alt=""></img>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a class="create-task" href="googel.com">
            <img src={process.env.PUBLIC_URL + '/img/create-task.svg'} alt=""></img>
          </a>

          <div class="create-task-box">

          </div>

          <div class="create-task-overlay">
          </div>
          </div>
    );
  }
}

export default App;
