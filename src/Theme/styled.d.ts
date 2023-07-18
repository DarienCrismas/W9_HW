import "styled-components";
import { Theme } from "@emotion/react";

declare module "styled-components"{
    export interface DefaultTheme extends Theme{}
}