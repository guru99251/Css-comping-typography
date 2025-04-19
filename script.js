// — DOM 요소 참조 —
const paraContainer         = document.querySelector('.paragraph-container');
const cssOutput             = document.getElementById('css-output');
const copyCssBtn            = document.getElementById('copy-css-btn');

// H1 controls
const h1FontInput           = document.getElementById('h1-font');
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

// — 이벤트 바인딩 —
const controls = [
  h1FontInput, h1FontWeightInput, h1FontSizeInput, h1LetterSpacingInput, h1LineHeightInput, h1BoldInput, h1ItalicInput, h1ColorInput, h1TextTransformSelect,
  h2FontInput, h2FontWeightInput, h2FontSizeInput, h2LetterSpacingInput, h2LineHeightInput, h2BoldInput, h2ItalicInput, h2ColorInput, h2BorderInput, h2TextTransformSelect,
  pSpaceFontInput, pSpaceFontSizeInput, pSpaceLetterSpacingInput, pSpaceLineHeightInput, pSpaceBoldInput, pSpaceItalicInput, pSpaceColorInput, pSpaceAlignSelect,
  pFontInput, pFontSizeInput, pLineHeightInput, pLineLengthInput, pBoldInput, pItalicInput, pColorInput, pJustifyInput,
  pBgColorInput
].filter(Boolean);
controls.forEach(ctrl => ctrl.addEventListener('input', updateStyles));

// — 스타일 업데이트 함수 — 
function updateStyles() {
  const h1Els = paraContainer.querySelectorAll('h1');
  const h2Els = paraContainer.querySelectorAll('h2');
  const subEls = paraContainer.querySelectorAll('.space-vertical');
  const pEls   = paraContainer.querySelectorAll('p:not(.space-vertical)');

  // H1
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
  });

  // H2
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
  });

  // 부주제
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
  });

  // 본문
  pEls.forEach(el => {
    el.style.fontFamily     = pFontInput.value;
    el.style.fontWeight     = pBoldInput.checked ? 'bold' : 'normal';
    el.style.fontSize       = `${pFontSizeInput.value}px`;
    el.style.lineHeight     = `${pLineHeightInput.value}%`;
    el.style.maxWidth       = `${pLineLengthInput.value}ch`;
    el.style.fontStyle      = pItalicInput.checked ? 'italic' : 'normal';
    el.style.color          = pColorInput.value;
    el.style.textAlign      = pJustifyInput.checked ? 'justify' : 'left';
  });

  // 배경색
  paraContainer.style.backgroundColor = pBgColorInput.value;

  // 요약 업데이트: 모든 Font Family 나열
  displayFontFamily.textContent = [
    `${h1FontInput.value}`,
    `${pSpaceFontInput.value}`,
    `${h2FontInput.value}`,
    `${pFontInput.value}`
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
  // 각 extra 값 재계산
  const lh1 = parseFloat(h1LineHeightInput.value);
  const ex1 = (lh1/100 - 1) * parseFloat(h1FontSizeInput.value);
  const lh2 = parseFloat(h2LineHeightInput.value);
  const ex2 = (lh2/100 - 1) * parseFloat(h2FontSizeInput.value);
  const lh3 = parseFloat(pSpaceLineHeightInput.value);
  const ex3 = (lh3/100 - 1) * parseFloat(pSpaceFontSizeInput.value);

  cssOutput.value = `
/* paragraph-container */
.paragraph-container {
  background-color: ${pBgColorInput.value};
}

/* h1 */
.paragraph-container h1 {
  margin-top: 0;
  margin-bottom: ${ex1}px;
  font-family: ${h1FontInput.value};
  font-weight: ${h1BoldInput.checked ? 'bold' : h1FontWeightInput.value};
  font-size: ${h1FontSizeInput.value}px;
  letter-spacing: ${h1LetterSpacingInput.value}px;
  font-style: ${h1ItalicInput.checked ? 'italic' : 'normal'};
  text-transform: ${h1TextTransformSelect.value};
  color: ${h1ColorInput.value};
}

/* h2 */
.paragraph-container h2 {
  margin-top: 0;
  margin-bottom: ${ex2}px;
  font-family: ${h2FontInput.value};
  font-weight: ${h2BoldInput.checked ? 'bold' : h2FontWeightInput.value};
  font-size: ${h2FontSizeInput.value}px;
  letter-spacing: ${h2LetterSpacingInput.value}px;
  font-style: ${h2ItalicInput.checked ? 'italic' : 'normal'};
  text-transform: ${h2TextTransformSelect.value};
  color: ${h2ColorInput.value};
  border-left: ${h2BorderInput.checked ? `4px solid ${h2ColorInput.value}` : 'none'};
}

/* subtitle */
.paragraph-container .space-vertical {
  margin-top: 0;
  margin-bottom: ${ex3}px;
  font-family: ${pSpaceFontInput.value};
  font-weight: ${pSpaceBoldInput.checked ? 'bold' : 'normal'};
  font-size: ${pSpaceFontSizeInput.value}px;
  letter-spacing: ${pSpaceLetterSpacingInput.value}px;
  font-style: ${pSpaceItalicInput.checked ? 'italic' : 'normal'};
  color: ${pSpaceColorInput.value};
  text-align: ${pSpaceAlignSelect.value};
}

/* body paragraphs */
.paragraph-container p:not(.space-vertical) {
  font-family: ${pFontInput.value};
  font-weight: ${pBoldInput.checked ? 'bold' : 'normal'};
  font-size: ${pFontSizeInput.value}px;
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


// ...your existing updateStyles / updateCssOutput / copyCssBtn code above…

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
