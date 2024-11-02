import "./NavLinkComponent.css";
import { NavLink } from "../../types";

export function NavLinkComponent(link: NavLink): string {
return `<li class="nav__item">
  <a href="${link.href}" class="nav__link" data-i18n="label-${link.label.toLowerCase()}">${link.label}</a>
  </li>`;
}