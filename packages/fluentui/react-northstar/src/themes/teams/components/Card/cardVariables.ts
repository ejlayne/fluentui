import { pxToRem } from '../../../../utils';

export interface CardVariables {
  backgroundColor: string;
  backgroundColorDisabled: string;
  backgroundColorFocus: string;
  backgroundColorHover: string;
  backgroundColorPressed: string;
  quietBackgroundColor: string;
  quietBackgroundColorDisabled: string;
  quietBackgroundColorFocus: string;
  quietBackgroundColorHover: string;
  quietBackgroundColorPressed: string;
  invertedBackgroundColor: string;
  invertedBackgroundColorDisabled: string;
  invertedBackgroundColorFocus: string;
  invertedBackgroundColorHover: string;
  invertedBackgroundColorPressed: string;
  borderStyle: string;
  borderColor: string;
  borderColorDisabled: string;
  borderColorHover: string;
  borderColorPressed: string;
  borderWidth: string;
  borderRadius: string;
  boxShadow: string;
  boxShadowHover: string;
  boxShadowFocus: string;
  boxShadowPressed: string;
  boxShadowDisabled: string;
  elevatedBoxShadow: string;
  elevatedBoxShadowHover: string;
  elevatedBoxShadowFocus: string;
  elevatedBoxShadowPressed: string;
  elevatedBoxShadowDisabled: string;
  margin: string;
  padding: string;
  colorDisabled: string;
  compactPadding: string;
  previewMargin: string;
  headerMargin: string;
  bodyMargin: string;
  footerMargin: string;
  fittedPreviewMargin: string;
  fittedHeaderMargin: string;
  fittedBodyMargin: string;
  fittedFooterMargin: string;
  previewMarginHorizontal: string;
  topControlsTop: string;
  topControlsRight: string;
  width: string;
  height: string;
  sizeSmallWidth: string;
  sizeSmallHeight: string;
  sizeSmallPadding: string;
  sizeLargeWidth: string;
  sizeLargeHeight: string;
  sizeLargePadding: string;
  fluidHeight: string;
  fluidWidth: string;
  expandableBoxStartMaxHeight: string;
  expandableBoxEndMaxHeight: string;
  expandableBoxShrinkTransition: string;
  expandableBoxExpandTransition: string;
}

export default (siteVars): CardVariables => {
  return {
    backgroundColor: siteVars.colorScheme.default.background1,
    backgroundColorDisabled: siteVars.colorScheme.default.backgroundDisabled1,
    backgroundColorFocus: siteVars.colorScheme.default.backgroundFocus1,
    backgroundColorHover: siteVars.colorScheme.default.backgroundHover1,
    backgroundColorPressed: siteVars.colorScheme.default.backgroundPressed,
    quietBackgroundColor: 'none',
    quietBackgroundColorDisabled: siteVars.colorScheme.default.backgroundDisabled,
    quietBackgroundColorFocus: 'none',
    quietBackgroundColorHover: siteVars.colorScheme.default.backgroundHover,
    quietBackgroundColorPressed: siteVars.colorScheme.default.backgroundPressed,
    invertedBackgroundColor: siteVars.colorScheme.default.background2,
    invertedBackgroundColorDisabled: siteVars.colorScheme.default.backgroundDisabled2,
    invertedBackgroundColorFocus: siteVars.colorScheme.default.background2,
    invertedBackgroundColorHover: siteVars.colorScheme.default.backgroundHover2,
    invertedBackgroundColorPressed: siteVars.colorScheme.default.backgroundPressed,
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderColorDisabled: 'transparent',
    borderColorHover: 'transparent',
    borderColorPressed: 'transparent',
    borderWidth: siteVars.borderWidth,
    borderRadius: pxToRem(3),
    boxShadow: 'none',
    boxShadowDisabled: 'none',
    boxShadowHover: 'none',
    boxShadowFocus: 'none',
    boxShadowPressed: 'none',
    elevatedBoxShadow: siteVars.shadowLevel1,
    elevatedBoxShadowDisabled: siteVars.shadowLevel1,
    elevatedBoxShadowHover: siteVars.shadowLevel3,
    elevatedBoxShadowFocus: siteVars.shadowLevel1,
    elevatedBoxShadowPressed: siteVars.shadowLevel1,
    padding: pxToRem(16),
    margin: pxToRem(0),
    colorDisabled: siteVars.colorScheme.default.foregroundDisabled,
    compactPadding: pxToRem(0),
    previewMargin: `0 0 ${pxToRem(10)} 0`,
    headerMargin: `0 0 ${pxToRem(10)} 0`,
    bodyMargin: `0 0 ${pxToRem(10)} 0`,
    footerMargin: `0 0 ${pxToRem(10)} 0`,
    fittedPreviewMargin: pxToRem(0),
    fittedHeaderMargin: pxToRem(0),
    fittedBodyMargin: pxToRem(0),
    fittedFooterMargin: pxToRem(0),
    previewMarginHorizontal: `0 ${pxToRem(10)} 0 0`,
    topControlsTop: pxToRem(10),
    topControlsRight: pxToRem(0),
    // TODO: update with latest values from design
    width: pxToRem(300),
    height: '100%',
    sizeSmallWidth: pxToRem(200),
    sizeSmallHeight: '100%',
    sizeSmallPadding: pxToRem(0),
    sizeLargeWidth: pxToRem(500),
    sizeLargeHeight: '100%',
    sizeLargePadding: pxToRem(16),
    fluidWidth: '100%',
    fluidHeight: '100%',
    expandableBoxStartMaxHeight: pxToRem(20),
    expandableBoxEndMaxHeight: pxToRem(500),
    expandableBoxShrinkTransition: 'max-height 0.5s ease-in',
    expandableBoxExpandTransition: 'max-height 1s ease-in',
  };
};
