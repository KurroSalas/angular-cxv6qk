export class _ServicioComun {
  public static async sleep(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  public static capitalize(text: string): string {
    return `${text.charAt(0).toUpperCase()}${text.slice(1).toLowerCase()}`;
  }
}
