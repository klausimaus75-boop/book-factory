export async function copyTextToClipboard(text: string, clipboard: Pick<Clipboard, "writeText"> = navigator.clipboard) {
  await clipboard.writeText(text);
}
