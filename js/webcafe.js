// $(document).ready(function(){
//   window.alert('welcome');
// })
// html문서를 모두 로드한 뒤에 스크립트 실행하게 하기위해서 ready를 사용했었음.
// window.alert('welcome');





let viewport = window.matchMedia('(max-width:999px)');

// 리사이즈 이벤트가 생기면 로드없이 적용시키자
$(window).resize(function(){
  location.reload();
});

if(viewport.matches){
  // 변수선언 -> 해놓으면 재사용 가능함.
  let nav = $('.navigation');
  let btn = $('.btn-menubar');
  let menuItems = $('.menu-item');
  let menuLists = $('.menu-list');
  let subMenus = $('.sub-menu');

  // btn변수가 click 이벤트가 발생했을 때
  // nav 요소에 is-act 클래스를 추가
  btn.click(function(){
    nav.toggleClass('is-act');
    if(nav.hasClass('is-act')){
      btn.attr('aria-label','메뉴 닫기');
      btn.attr('title','메뉴 닫기');
    }else{
      btn.attr('aria-label','메뉴 열기');
      btn.attr('title','메뉴 열기');
    }    
  });
  // .menu-item 클래스에 icon-plus 클래스를 추가하기
  menuItems.addClass('icon-plus');
  menuItems.attr('aria-haspopup', 'true');
  menuItems.attr('aria-expanded', 'false');
  menuItems.attr('role', 'button');
  menuItems.attr('tabindex', '0');
  
  // .menu-item에 클릭이 발생했을때
  // 이벤트가 발생한 요소의 sub-menu만 보이기
  menuItems.on('click keyup', function(e){
    if(e.type === 'click' || e.keycode === 13){
      menuLists.removeClass('menu-act');
      $(this).parent().addClass('menu-act');  
      menuItems.removeClass('icon-minus').addClass('icon-plus');
      menuItems.attr('aria-expanded', 'false');
      $(this).removeClass('icon-plus').addClass('icon-minus');
      $(this).attr('aria-expanded', 'true');
    }
  });
}


// =대입
// ==
// ===같은지 비교?
// ||또는




