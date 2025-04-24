// — DOM 요소 참조 —
const paraContainer         = document.querySelector('.paragraph-container');
const cssOutput             = document.getElementById('css-output');
const copyCssBtn            = document.getElementById('copy-css-btn');

// 토글 버튼 & controls 컨테이너
const typographyControls   = document.querySelector('.typography-controls');
const controlsToggleBtn    = document.getElementById('controls-toggle-btn');

// 새 입력 요소
const h1TextAlignSelect    = document.getElementById('h1-text-align');
const h2TextAlignSelect    = document.getElementById('h2-text-align');
const pLetterSpacingInput  = document.getElementById('p-letter-spacing');

// H1 controls
const h1FontInput           = document.getElementById('h1-font');
const h1FontSelect          = document.getElementById('h1-font-select');
const h1FontWeightInput     = document.getElementById('h1-font-weight');
const h1FontSizeInput       = document.getElementById('h1-font-size');
const h1LetterSpacingInput  = document.getElementById('h1-letter-spacing');
const h1LineHeightInput     = document.getElementById('h1-line-height');
const h1BoldInput           = document.getElementById('h1-bold');
const h1ItalicInput         = document.getElementById('h1-italic');
const h1ColorInput          = document.getElementById('h1-color');
const h1TextTransformSelect = document.getElementById('h1-text-transform');

// H2 controls
const h2FontInput           = document.getElementById('h2-font');
const h2FontSelect          = document.getElementById('h2-font-select');
const h2FontWeightInput     = document.getElementById('h2-font-weight');
const h2FontSizeInput       = document.getElementById('h2-font-size');
const h2LetterSpacingInput  = document.getElementById('h2-letter-spacing');
const h2LineHeightInput     = document.getElementById('h2-line-height');
const h2BoldInput           = document.getElementById('h2-bold');
const h2ItalicInput         = document.getElementById('h2-italic');
const h2ColorInput          = document.getElementById('h2-color');
const h2BorderInput         = document.getElementById('h2-border');
const h2TextTransformSelect = document.getElementById('h2-text-transform');

// Subtitle controls
const pSpaceFontInput       = document.getElementById('p-space-font');
const pFontSelect           = document.getElementById('p-font-select');
const pSpaceFontSelect      = document.getElementById('p-space-font-select');
const pSpaceFontSizeInput   = document.getElementById('p-space-font-size');
const pSpaceLetterSpacingInput = document.getElementById('p-space-letter-spacing');
const pSpaceLineHeightInput = document.getElementById('p-space-line-height');
const pSpaceBoldInput       = document.getElementById('p-space-bold');
const pSpaceItalicInput     = document.getElementById('p-space-italic');
const pSpaceColorInput      = document.getElementById('p-space-color');
const pSpaceAlignSelect     = document.getElementById('p-space-align');

// Body paragraph controls
const pFontInput            = document.getElementById('p-font');
const pFontSizeInput        = document.getElementById('p-font-size');
const pLineHeightInput      = document.getElementById('p-line-height');
const pLineLengthInput      = document.getElementById('p-line-length');
const pBoldInput            = document.getElementById('p-bold');
const pItalicInput          = document.getElementById('p-italic');
const pColorInput           = document.getElementById('p-color');
const pJustifyInput         = document.getElementById('p-justify');

// Container background
const pBgColorInput         = document.getElementById('p-bg-color');

// Summary elements
const displayFontFamily     = document.getElementById('display-font-family');
const displayTypeSize       = document.getElementById('display-type-size');
const displayLineHeight     = document.getElementById('display-line-height');
const displayLineLength     = document.getElementById('display-line-length');
const displayLineLengthCode = document.getElementById('display-line-length-code');
const displayH1Color        = document.getElementById('display-h1-color');
const displayH2Color        = document.getElementById('display-h2-color');
const displayPColor         = document.getElementById('display-p-color');
const displayBgColor        = document.getElementById('display-bg-color');

// 로드된 폰트 링크를 저장할 Set
const loadedFontStyles = new Set();
const loadedFontLinks  = new Set();

// — 요약(typography-container) 토글 스크립트 추가 —
const summaryToggleBtn      = document.getElementById('summary-toggle-btn');
const typographyContainer   = document.querySelector('.typography-container');
const layout                = document.querySelector('.layout');
let isCollapsedSummary      = false;

// Border 관련 요소
// H1 Border
const h1BorderSideInput  = document.getElementById('h1-border-side');
const h1BorderWidthInput = document.getElementById('h1-border-width');
const h1BorderStyleInput = document.getElementById('h1-border-style');
const h1BorderColorInput = document.getElementById('h1-border-color');
// Subtitle Border (p-space)
const pSpaceBorderSideInput  = document.getElementById('p-space-border-side');
const pSpaceBorderWidthInput = document.getElementById('p-space-border-width');
const pSpaceBorderStyleInput = document.getElementById('p-space-border-style');
const pSpaceBorderColorInput = document.getElementById('p-space-border-color');
// H2 Border
const h2BorderSideInput  = document.getElementById('h2-border-side');
const h2BorderWidthInput = document.getElementById('h2-border-width');
const h2BorderStyleInput = document.getElementById('h2-border-style');
const h2BorderColorInput = document.getElementById('h2-border-color');


// — 이벤트 바인딩 —
const controls = [
  h1FontInput, h1FontWeightInput, h1FontSizeInput, h1LetterSpacingInput, h1LineHeightInput, h1BoldInput, h1ItalicInput, h1ColorInput, h1TextTransformSelect,
  h2FontInput, h2FontWeightInput, h2FontSizeInput, h2LetterSpacingInput, h2LineHeightInput, h2BoldInput, h2ItalicInput, h2ColorInput, h2BorderInput, h2TextTransformSelect,
  pSpaceFontInput, pSpaceFontSizeInput, pSpaceLetterSpacingInput, pSpaceLineHeightInput, pSpaceBoldInput, pSpaceItalicInput, pSpaceColorInput, pSpaceAlignSelect,
  pFontInput, pFontSizeInput, pLineHeightInput, pLineLengthInput, pBoldInput, pItalicInput, pColorInput, pJustifyInput,
  pBgColorInput, h1TextAlignSelect, h2TextAlignSelect, pLetterSpacingInput,
].filter(Boolean);
controls.forEach(ctrl => ctrl.addEventListener('input', updateStyles));


controls.push(
  h1BorderSideInput, h1BorderWidthInput, h1BorderStyleInput, h1BorderColorInput,
  pSpaceBorderSideInput, pSpaceBorderWidthInput, pSpaceBorderStyleInput, pSpaceBorderColorInput,
  h2BorderSideInput, h2BorderWidthInput, h2BorderStyleInput, h2BorderColorInput
);
controls.forEach(ctrl => ctrl.addEventListener('input', updateStyles));


// 토글 버튼 클릭 시 접고/펼치기
controlsToggleBtn.addEventListener('click', () => {
  typographyControls.classList.toggle('collapsed');
  controlsToggleBtn.textContent = typographyControls.classList.contains('collapsed') ? '☰' : '✕';
});

// 폰트 선택기에서 선택된 폰트 이름을 가져오기
let fontGroups = [];

fetch('web-fonts.json')
  .then(res => res.json())
  .then(({ groups }) => {
    fontGroups = groups;
    [h1FontSelect, pSpaceFontSelect, h2FontSelect, pFontSelect]
      .forEach(sel => populateFontSelect(sel, groups));
  });

function populateFontSelect(sel, groups) {
  groups.forEach(group => {
    const og = document.createElement('optgroup');
    og.label = group.label;
    group.fonts.forEach(f => {
      const o = document.createElement('option');
      o.value       = f.url;
      o.textContent = f.name;
      og.appendChild(o);
    });
    sel.appendChild(og);
  });
  // ‘직접 입력’ 옵션 별도 추가
  const manual = document.createElement('option');
  manual.value       = '';
  manual.textContent = '직접 입력';
  sel.appendChild(manual);
}

// 폰트 선택기와 입력창 연결
function wireFontSelect(selectEl, inputEl) {
  // 초기: select 에서 값 고르면 input 숨기고 업데이트
  selectEl.addEventListener('change', () => {
    if (selectEl.value === '') {
      // 직접입력 모드
      inputEl.style.display = '';
      inputEl.value = '';
    } else {
      inputEl.style.display = 'none';
      inputEl.value = selectEl.value;
      updateStyles();
    }
  });
  // input 에 직접 쓰면 바로 스타일 업데이트
  inputEl.addEventListener('input', updateStyles);
}

// wire up 네 군데
wireFontSelect(h1FontSelect,   h1FontInput);
wireFontSelect(pSpaceFontSelect, pSpaceFontInput);
wireFontSelect(h2FontSelect,     h2FontInput);
wireFontSelect(pFontSelect,      pFontInput);



// 웹 폰트 URL 검사 및 로딩, family 이름 추출
/**
 * value:
 *  - 구글폰트 CSS URL (fonts.googleapis.com) → <link> 주입
 *  - .css URL                        → <link> 주입
 *  - 폰트파일 URL (.woff2, .ttf 등) → <style>@font-face</style> 주입
 *  - 그 외                           → 그냥 family 이름
 */

function getFontFamily(value) {
  // 1) 혹시 rel="stylesheet" 같은 부가 텍스트가 붙어있다면 URL만 뽑아내기
  let v = (value.match(/https?:\/\/[^\s'"]+/) || [value.trim()])[0];

  // 2) Google Fonts CSS2 링크
  if (v.includes('fonts.googleapis.com')) {
    if (!loadedFontStyles.has(v)) {
      const link = document.createElement('link');
      link.rel  = 'stylesheet';
      link.href = v;
      document.head.appendChild(link);
      loadedFontStyles.add(v);
      loadedFontLinks.add(v);
    }
    try {
      // ?family=NAME:… 형태에서 이름만 추출
      const fam = new URL(v).searchParams.get('family');
      if (fam) return fam.split('&')[0].split(':')[0].replace(/\+/g, ' ');
    } catch {}
    return v;
  }

  // 3) 일반 .css 파일 URL
  if (/\.css($|\?)/i.test(v)) {
    if (!loadedFontStyles.has(v)) {
      const link = document.createElement('link');
      link.rel  = 'stylesheet';
      link.href = v;
      document.head.appendChild(link);
      loadedFontStyles.add(v);
      loadedFontLinks.add(v);
    }
    try {
      return new URL(v).searchParams.get('family')
               .split(':')[0]
               .replace(/\+/g, ' ');
    } catch {
      return v;
    }
  }

  // 4) .woff/.woff2/.ttf/.otf 같은 폰트 파일 URL
  if (/\.(woff2?|ttf|otf)($|\?)/i.test(v)) {
    if (!loadedFontStyles.has(v)) {
      const filename = v.split('/').pop().split('?')[0];
      const name     = filename.split('.')[0];      // BookkMyungjo-Bd
      const format   = filename.split('.').pop();    // woff2, ttf…
      const styleTag = document.createElement('style');
      styleTag.textContent = `
@font-face {
  font-family: '${name}';
  src: url('${v}') format('${format}');
}`;
      document.head.appendChild(styleTag);
      loadedFontStyles.add(v);
      loadedFontLinks.add(v);
    }
    return v.split('/').pop().split('.')[0];
  }

  // 5) 순수 폰트명
  return v.trim();
}

// — 스타일 업데이트 함수 — 
function updateStyles() {
  const h1Els = paraContainer.querySelectorAll('h1');
  const h2Els = paraContainer.querySelectorAll('h2');
  const subEls = paraContainer.querySelectorAll('.space-vertical');
  const pEls   = paraContainer.querySelectorAll('p:not(.space-vertical)');

  // H1
  const h1Family = getFontFamily(h1FontInput.value);
  const h1Side  = h1BorderSideInput.value;
  const h1BW    = `${h1BorderWidthInput.value}px`;
  const h1BS    = h1BorderStyleInput.value;
  const h1BC    = h1BorderColorInput.value;
  h1Els.forEach(el => {
    el.style.marginTop      = '0';
    const lh1               = parseFloat(h1LineHeightInput.value);
    const extra1            = (lh1/100 - 1) * parseFloat(h1FontSizeInput.value);
    el.style.marginBottom   = `${extra1}px`;
    el.style.fontFamily     = h1FontInput.value;
    el.style.fontWeight     = h1BoldInput.checked ? 'bold' : h1FontWeightInput.value;
    el.style.fontSize       = `${h1FontSizeInput.value}px`;
    el.style.letterSpacing  = `${h1LetterSpacingInput.value}px`;
    el.style.fontStyle      = h1ItalicInput.checked ? 'italic' : 'normal';
    el.style.textTransform  = h1TextTransformSelect.value;
    el.style.color          = h1ColorInput.value;
    el.style.textAlign = h1TextAlignSelect.value;
    el.style.fontFamily     = h1Family;
    
    ['Left','Top','Bottom'].forEach(pos => {
      el.style['border' + pos] = 'none';
    });
    if (h1Side !== 'none') {
      el.style['border' + h1Side.charAt(0).toUpperCase() + h1Side.slice(1)] =
        `${h1BW} ${h1BS} ${h1BC}`;
    }
  });

  // 부주제
  const subFamily = getFontFamily(pSpaceFontInput.value);
  const psSide  = pSpaceBorderSideInput.value;
  const psBW    = `${pSpaceBorderWidthInput.value}px`;
  const psBS    = pSpaceBorderStyleInput.value;
  const psBC    = pSpaceBorderColorInput.value;
  subEls.forEach(el => {
    el.style.marginTop      = '0';
    const lh3               = parseFloat(pSpaceLineHeightInput.value);
    const extra3            = (lh3/100 - 1) * parseFloat(pSpaceFontSizeInput.value);
    el.style.marginBottom   = `${extra3}px`;
    el.style.fontFamily     = pSpaceFontInput.value;
    el.style.fontWeight     = pSpaceBoldInput.checked ? 'bold' : 'normal';
    el.style.fontSize       = `${pSpaceFontSizeInput.value}px`;
    el.style.letterSpacing  = `${pSpaceLetterSpacingInput.value}px`;
    el.style.fontStyle      = pSpaceItalicInput.checked ? 'italic' : 'normal';
    el.style.color          = pSpaceColorInput.value;
    el.style.textAlign      = pSpaceAlignSelect.value;
    el.style.fontFamily     = subFamily;
    
    ['Left','Top','Bottom'].forEach(pos => { el.style['border'+pos] = 'none'; });
    if (psSide !== 'none') {
      el.style['border' + psSide.charAt(0).toUpperCase() + psSide.slice(1)] =
        `${psBW} ${psBS} ${psBC}`;
    }
  });

  // H2
  const h2Family = getFontFamily(h2FontInput.value);
  const h2Side  = h2BorderSideInput.value;
  const h2BW    = `${h2BorderWidthInput.value}px`;
  const h2BS    = h2BorderStyleInput.value;
  const h2BC    = h2BorderColorInput.value;
  h2Els.forEach(el => {
    el.style.marginTop      = '0';
    const lh2               = parseFloat(h2LineHeightInput.value);
    const extra2            = (lh2/100 - 1) * parseFloat(h2FontSizeInput.value);
    el.style.marginBottom   = `${extra2}px`;
    el.style.fontFamily     = h2FontInput.value;
    el.style.fontWeight     = h2BoldInput.checked ? 'bold' : h2FontWeightInput.value;
    el.style.fontSize       = `${h2FontSizeInput.value}px`;
    el.style.letterSpacing  = `${h2LetterSpacingInput.value}px`;
    el.style.fontStyle      = h2ItalicInput.checked ? 'italic' : 'normal';
    el.style.textTransform  = h2TextTransformSelect.value;
    el.style.color          = h2ColorInput.value;
    el.style.borderLeft     = h2BorderInput.checked
                              ? `4px solid ${h2ColorInput.value}`
                              : 'none';
    el.style.textAlign   = h2TextAlignSelect.value;
    el.style.paddingLeft = h2BorderInput.checked ? '0.5rem' : '0';
    el.style.fontFamily     = h2Family;
    
    ['Left','Top','Bottom'].forEach(pos => { el.style['border'+pos] = 'none'; });
    if (h2Side !== 'none') {
      el.style['border' + h2Side.charAt(0).toUpperCase() + h2Side.slice(1)] =
        `${h2BW} ${h2BS} ${h2BC}`;
    }
  });

  // 본문
  const pFamily = getFontFamily(pFontInput.value);
  pEls.forEach(el => {
    el.style.fontFamily     = pFontInput.value;
    el.style.fontWeight     = pBoldInput.checked ? 'bold' : 'normal';
    el.style.fontSize       = `${pFontSizeInput.value}px`;
    el.style.lineHeight     = `${pLineHeightInput.value}%`;
    el.style.maxWidth       = `${pLineLengthInput.value}ch`;
    el.style.fontStyle      = pItalicInput.checked ? 'italic' : 'normal';
    el.style.color          = pColorInput.value;
    el.style.textAlign      = pJustifyInput.checked ? 'justify' : 'left';
    el.style.letterSpacing = `${pLetterSpacingInput.value}px`;
    el.style.fontFamily     = pFamily;
  });

  // 배경색
  paraContainer.style.backgroundColor = pBgColorInput.value;
  
  // 요약 업데이트: 추출된 폰트 이름만 나열
  displayFontFamily.textContent = [
    getFontFamily(h1FontInput.value),
    getFontFamily(pSpaceFontInput.value),
    getFontFamily(h2FontInput.value),
    getFontFamily(pFontInput.value)
    ].join('  |  ');

  // 나머지 요약
  displayTypeSize.textContent       = `${pFontSizeInput.value}px`;
  displayLineHeight.textContent     = `${pLineHeightInput.value}%`;
  displayLineLength.textContent     = `${pLineLengthInput.value}자`;
  displayLineLengthCode.textContent = `${pLineLengthInput.value}ch`;
  displayH1Color.textContent        = h1ColorInput.value;
  displayH2Color.textContent        = h2ColorInput.value;
  displayPColor.textContent         = pColorInput.value;
  displayBgColor.textContent        = pBgColorInput.value;

  updateCssOutput();
}

// — CSS 출력 생성 — 
function updateCssOutput() {
  const h1Side    = h1BorderSideInput.value;
  const psSide    = pSpaceBorderSideInput.value;
  const h2Side    = h2BorderSideInput.value;
  
  // 로드된 모든 폰트 링크를 @import 로 출력
  let importCss = '';
  loadedFontLinks.forEach(url => {
    importCss += `@import url('${url}');\n`;
  });

  // 각 extra 값 재계산
  const lh1 = parseFloat(h1LineHeightInput.value);
  const ex1 = (lh1/100 - 1) * parseFloat(h1FontSizeInput.value);
  const lh2 = parseFloat(h2LineHeightInput.value);
  const ex2 = (lh2/100 - 1) * parseFloat(h2FontSizeInput.value);
  const lh3 = parseFloat(pSpaceLineHeightInput.value);
  const ex3 = (lh3/100 - 1) * parseFloat(pSpaceFontSizeInput.value);

  cssOutput.value = `
  ${importCss}
  /* paragraph-container */
  .paragraph-container {
    background-color: ${pBgColorInput.value};
  }

  /* h1 */
  .paragraph-container h1 {
    margin-top: 0;
    margin-bottom: ${ex1}px;
    font-family: ${getFontFamily(h1FontInput.value)};
    font-weight: ${h1BoldInput.checked ? 'bold' : h1FontWeightInput.value};
    font-size: ${h1FontSizeInput.value}px;
    letter-spacing: ${h1LetterSpacingInput.value}px;
    font-style: ${h1ItalicInput.checked ? 'italic' : 'normal'};
    text-transform: ${h1TextTransformSelect.value};
    text-align: ${h1TextAlignSelect.value};
    color: ${h1ColorInput.value};
    border-${h1Side}: ${h1BorderWidthInput.value}px ${h1BorderStyleInput.value} ${h1BorderColorInput.value};
   }

  /* subtitle */
  .paragraph-container .space-vertical {
    margin-top: 0;
    margin-bottom: ${ex3}px;
    font-family: ${getFontFamily(pSpaceFontInput.value)};
    font-weight: ${pSpaceBoldInput.checked ? 'bold' : 'normal'};
    font-size: ${pSpaceFontSizeInput.value}px;
    letter-spacing: ${pSpaceLetterSpacingInput.value}px;
    font-style: ${pSpaceItalicInput.checked ? 'italic' : 'normal'};
    color: ${pSpaceColorInput.value};
    text-align: ${pSpaceAlignSelect.value};
    border-${psSide}: ${pSpaceBorderWidthInput.value}px ${pSpaceBorderStyleInput.value} ${pSpaceBorderColorInput.value};
   }

  /* h2 */
  .paragraph-container h2 {
    margin-top: 0;
    margin-bottom: ${ex2}px;
    font-family: ${getFontFamily(h2FontInput.value)};
    font-weight: ${h2BoldInput.checked ? 'bold' : h2FontWeightInput.value};
    font-size: ${h2FontSizeInput.value}px;
    letter-spacing: ${h2LetterSpacingInput.value}px;
    font-style: ${h2ItalicInput.checked ? 'italic' : 'normal'};
    text-transform: ${h2TextTransformSelect.value};
    text-align: ${h2TextAlignSelect.value};
    color: ${h2ColorInput.value};
    border-left: ${h2BorderInput.checked ? `4px solid ${h2ColorInput.value}` : 'none'};
    padding-left: ${h2BorderInput.checked ? '0.5rem' : '0'};
    border-${h2Side}: ${h2BorderWidthInput.value}px ${h2BorderStyleInput.value} ${h2BorderColorInput.value};
   }

  /* body paragraphs */
  .paragraph-container p:not(.space-vertical) {
    font-family: ${getFontFamily(pFontInput.value)};
    font-weight: ${pBoldInput.checked ? 'bold' : 'normal'};
    font-size: ${pFontSizeInput.value}px;
    letter-spacing: ${pLetterSpacingInput.value}px;
    line-height: ${pLineHeightInput.value}%;
    max-width: ${pLineLengthInput.value}ch;
    font-style: ${pItalicInput.checked ? 'italic' : 'normal'};
    color: ${pColorInput.value};
    text-align: ${pJustifyInput.checked ? 'justify' : 'left'};
  }
  `.trim();
}



// 초기화 및 복사 핸들러
updateStyles();
copyCssBtn.addEventListener('click', () => {
  updateCssOutput();  // 반드시 최신 스타일 반영
  navigator.clipboard.writeText(cssOutput.value)
    .then(() => alert('CSS 코드가 복사되었습니다.'))
    .catch(() => alert('복사에 실패했습니다.'));
});

// — 더블클릭 편집 —
paraContainer.querySelectorAll('h1, h2, .space-vertical, p:not(.space-vertical)')
  .forEach(el => {
    el.addEventListener('dblclick', () => { el.contentEditable = true; el.focus(); });
    el.addEventListener('blur', () => el.contentEditable = false);
  });



// — 언어 전환용 스크립트 추가 —
// 1) 번역 데이터 로드
let translations = {};
fetch('translations.json')
  .then(res => res.json())
  .then(json => { 
    translations = json; 
    cacheOriginalText();  // 미리 원문을 data-original-text에 저장해 둡니다
  })
  .catch(err => console.error('translations.json 로딩 실패:', err));

// 2) 토글 상태 & 버튼 레퍼런스
let isEnglish = false;
const toggleBtn = document.getElementById('toggle-english-btn');

// 3) 원문 저장 헬퍼
function cacheOriginalText() {
  paraContainer
    .querySelectorAll('[data-i18n-key]')
    .forEach(el => {
      if (!el.dataset.originalText) {
        el.dataset.originalText = el.textContent.trim();
      }
    });
}

// 4) 토글 핸들러
toggleBtn.addEventListener('click', () => {
  // 번역 → 원문 또는 원문 → 번역
  paraContainer
    .querySelectorAll('[data-i18n-key]')
    .forEach(el => {
      const key = el.dataset.i18nKey;
      if (!isEnglish) {
        // 영어로
        el.textContent = translations[key] || el.dataset.originalText;
      } else {
        // 한국어 복원
        el.textContent = el.dataset.originalText;
      }
    });

  isEnglish = !isEnglish;
  toggleBtn.textContent = isEnglish ? '한국어 복원' : '영어 전환';
});

// — 요약 접기/펼치기 핸들러 —
summaryToggleBtn.addEventListener('click', () => {
  isCollapsedSummary = !isCollapsedSummary;

  // 1) 요약 컨테이너 보이기/숨기기
  typographyContainer.style.display = isCollapsedSummary ? 'none' : '';

  // 2) 버튼 아이콘 토글 (화살표 ←/→)
  summaryToggleBtn.textContent = isCollapsedSummary ? '⮞' : '⮜';

  // 3) 본문 중앙 정렬
  if (isCollapsedSummary) {
    layout.style.justifyContent = 'center';
    layout.style.marginLeft     = 'auto';
    layout.style.marginRight    = 'auto';
  } else {
    layout.style.justifyContent = '';
    layout.style.marginLeft     = ''; // style.css의 기본(왼쪽 여백)으로 복원
    layout.style.marginRight    = '';
  }
});