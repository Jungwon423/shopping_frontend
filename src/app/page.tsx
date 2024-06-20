import { Avatar } from "@/components/avatar";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/dropdown";
import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "@/components/navbar";
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
} from "@/components/sidebar";
import { SidebarLayout } from "@/components/sidebar-layout";
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
import { Divider } from "../../catalyst-ui-kit/typescript/divider";
import { Strong, Text } from "@/components/text";

export default function Home() {
  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <NavbarItem href="/search" aria-label="Search">
              <MagnifyingGlassIcon />
            </NavbarItem>
            <NavbarItem href="/inbox" aria-label="Inbox">
              <InboxIcon />
            </NavbarItem>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar src="/profile-photo.jpg" square />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="bottom end">
                <DropdownItem href="/my-profile">
                  <UserIcon />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/settings">
                  <Cog8ToothIcon />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/privacy-policy">
                  <ShieldCheckIcon />
                  <DropdownLabel>Privacy policy</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/share-feedback">
                  <LightBulbIcon />
                  <DropdownLabel>Share feedback</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/logout">
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
              <SidebarItem href="/home">
                <HomeIcon />
                <SidebarLabel>홈</SidebarLabel>
              </SidebarItem>
              <SidebarDivider />
              <SidebarItem href="/products/new">
                <PlusIcon />
                <SidebarLabel>신규 상품 등록</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/products/manage">
                <ClipboardDocumentListIcon />
                <SidebarLabel>상품 관리</SidebarLabel>
              </SidebarItem>
              <SidebarDivider />
              <SidebarItem href="/orders/manage">
                <ClipboardDocumentCheckIcon />
                <SidebarLabel>상품 주문 관리</SidebarLabel>
              </SidebarItem>
              <SidebarDivider />
              <SidebarItem href="/inquiries">
                <UserCircleIcon />
                <SidebarLabel>고객 문의 관리</SidebarLabel>
              </SidebarItem>
              <SidebarDivider />
              <SidebarItem href="/settings/uploads">
                <CogIcon />
                <SidebarLabel>기본 업로드 설정</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/settings/market">
                <InboxIcon />
                <SidebarLabel>마켓 설정</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/settings/warning-words">
                <ShieldExclamationIcon />
                <SidebarLabel>경고 단어 설정</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
            <SidebarSpacer />
            <SidebarSection>
              <SidebarItem href="/support">
                <QuestionMarkCircleIcon />
                <SidebarLabel>문의하기</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
        </Sidebar>
      }
    >
      {/* The page content */}
    </SidebarLayout>
  );
}
