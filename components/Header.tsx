/** @jsxImportSource theme-ui */
import { Link, jsx, Image } from "theme-ui";
import { ReactNode } from "react";

type Props = {
  defaultBackHref?: string;
  renderBackButton?: () => ReactNode;
};
export default function Header({
  defaultBackHref = "/",
  renderBackButton,
}: Props) {
  return (
    <div
      sx={{
        maxWidth: 768,
        mx: "auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Link
        href={defaultBackHref}
        sx={{
          variant: "styles.navlink",
          fontSize: 5,
          py: 2,
        }}
      >
        {renderBackButton ? (
          renderBackButton()
        ) : (
          <Image
            sx={{
              height: 48,
            }}
            alt="logo martha marley spoon"
            src="https://marleyspoon.com/images/ms/svg/logo-martha-marley-spoon-389f42c71a.svg"
          />
        )}
      </Link>
    </div>
  );
}
