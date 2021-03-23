export function fillColorSVGPath(svgIcon: HTMLElement, color: string) {
  svgIcon.childNodes.forEach((el) => {
    if (el.nodeName === 'path') {
      (el as HTMLElement).style.fill = color;
    }
  });
}
