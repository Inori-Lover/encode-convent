declare module "*.css";
declare module "*.scss";
declare module "*.png";
declare module "*.svg" {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>
  ): React.ReactElement;
  const url: string;
  export default url;
}

declare const __DEV__: boolean;
declare const __VER__: string;
declare const __BUILD_AT__: number;
/** link element ref */
declare const __REL__: string;
