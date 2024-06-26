"use client";

import { Inter } from "next/font/google";

import { Avatar } from "@/components/catalyst-ui-kit/avatar";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/catalyst-ui-kit/dropdown";
import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "@/components/catalyst-ui-kit/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarDivider,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from "@/components/catalyst-ui-kit/sidebar";
import { SidebarLayout } from "@/components/catalyst-ui-kit/sidebar-layout";
import {
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  PlusIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import {
  Cog6ToothIcon,
  HomeIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  Square2StackIcon,
  TicketIcon,
  ClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon,
  UserCircleIcon,
  CogIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/20/solid";
import { Strong, Text } from "@/components/catalyst-ui-kit/text";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarLayout
          navbar={
            <Navbar>
              <NavbarSpacer />
              <NavbarSection>
                <NavbarItem href="/service/search" aria-label="Search">
                  <MagnifyingGlassIcon />
                </NavbarItem>
                <NavbarItem href="/service/inbox" aria-label="Inbox">
                  <InboxIcon />
                </NavbarItem>
                <Dropdown>
                  <DropdownButton as={NavbarItem}>
                    <Avatar src="/profile-photo.jpg" square />
                  </DropdownButton>
                  <DropdownMenu className="min-w-64" anchor="bottom end">
                    <DropdownItem href="/service/my-profile">
                      <UserIcon />
                      <DropdownLabel>My profile</DropdownLabel>
                    </DropdownItem>
                    <DropdownItem href="/service/settings">
                      <Cog8ToothIcon />
                      <DropdownLabel>Settings</DropdownLabel>
                    </DropdownItem>
                    <DropdownDivider />
                    <DropdownItem href="/service/privacy-policy">
                      <ShieldCheckIcon />
                      <DropdownLabel>Privacy policy</DropdownLabel>
                    </DropdownItem>
                    <DropdownItem href="/service/share-feedback">
                      <LightBulbIcon />
                      <DropdownLabel>Share feedback</DropdownLabel>
                    </DropdownItem>
                    <DropdownDivider />
                    <DropdownItem href="/service/logout">
                      <ArrowRightStartOnRectangleIcon />
                      <DropdownLabel>Sign out</DropdownLabel>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavbarSection>
            </Navbar>
          }
          sidebar={
            <Sidebar>
              <SidebarHeader>
                <Strong>WONMO</Strong>
              </SidebarHeader>
              <SidebarBody>
                <SidebarSection>
                  <SidebarItem href="/service" active={pathname === "/service"}>
                    <HomeIcon />
                    <SidebarLabel>홈</SidebarLabel>
                  </SidebarItem>
                  <SidebarDivider />
                  <SidebarItem
                    href="/service/products/new"
                    active={pathname.startsWith("/service/products/new")}
                  >
                    <PlusIcon />
                    <SidebarLabel>신규 상품 등록</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem
                    href="/service/products/manage"
                    active={pathname.startsWith("/service/products/manage")}
                  >
                    <ClipboardDocumentListIcon />
                    <SidebarLabel>상품 관리</SidebarLabel>
                  </SidebarItem>
                  <SidebarDivider />
                  <SidebarItem
                    href="/service/orders/manage"
                    active={pathname.startsWith("/service/orders/manage")}
                  >
                    <ClipboardDocumentCheckIcon />
                    <SidebarLabel>상품 주문 관리</SidebarLabel>
                  </SidebarItem>
                  <SidebarDivider />
                  <SidebarItem
                    href="/service/inquiries"
                    active={pathname.startsWith("/service/inquiries")}
                  >
                    <UserCircleIcon />
                    <SidebarLabel>고객 문의 관리</SidebarLabel>
                  </SidebarItem>
                  <SidebarDivider />
                  <SidebarItem
                    href="/service/settings/uploads"
                    active={pathname.startsWith("/service/settings/uploads")}
                  >
                    <CogIcon />
                    <SidebarLabel>기본 업로드 설정</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem
                    href="/service/settings/market"
                    active={pathname.startsWith("/service/settings/market")}
                  >
                    <InboxIcon />
                    <SidebarLabel>마켓 설정</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem
                    href="/service/settings/warning-words"
                    active={pathname.startsWith(
                      "/service/settings/warning-words"
                    )}
                  >
                    <ShieldExclamationIcon />
                    <SidebarLabel>경고 단어 설정</SidebarLabel>
                  </SidebarItem>
                </SidebarSection>
                <SidebarSpacer />
                <SidebarSection>
                  <SidebarItem
                    href="/service/support"
                    active={pathname.startsWith("/service/support")}
                  >
                    <QuestionMarkCircleIcon />
                    <SidebarLabel>문의하기</SidebarLabel>
                  </SidebarItem>
                </SidebarSection>
              </SidebarBody>
            </Sidebar>
          }
        >
          {children}
        </SidebarLayout>
      </body>
    </html>
  );
}
