// "use client";
// import { cn } from "../../../../lib/utils";
// import Link, { LinkProps } from "next/link";
// import React, { useState, createContext, useContext } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { IconMenu2, IconX } from "@tabler/icons-react";

// interface Links {
//   label: string;
//   href: string;
//   icon: React.JSX.Element | React.ReactNode;
// }

// interface SidebarContextProps {
//   open: boolean;
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   animate: boolean;
// }

// const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

// export const useSidebar = () => {
//   const context = useContext(SidebarContext);
//   if (!context) {
//     throw new Error("useSidebar must be used within a SidebarProvider");
//   }
//   return context;
// };

// export const SidebarProvider = ({ children, open: openProp, setOpen: setOpenProp, animate = true }: { children: React.ReactNode; open?: boolean; setOpen?: React.Dispatch<React.SetStateAction<boolean>>; animate?: boolean }) => {
//   const [openState, setOpenState] = useState(false);

//   const open = openProp !== undefined ? openProp : openState;
//   const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

//   return <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>{children}</SidebarContext.Provider>;
// };

// export const Sidebar = ({ children, open, setOpen, animate }: { children: React.ReactNode; open?: boolean; setOpen?: React.Dispatch<React.SetStateAction<boolean>>; animate?: boolean }) => {
//   return (
//     <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
//       {children}
//     </SidebarProvider>
//   );
// };

// export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
//   return (
//     <>
//       <DesktopSidebar {...props} />
//       <MobileSidebar {...(props as React.ComponentProps<"div">)} />
//     </>
//   );
// };

// export const DesktopSidebar = ({ className, children, ...props }: React.ComponentProps<typeof motion.div>) => {
//   const { open, setOpen, animate } = useSidebar();
//   return (
//     <>
//       <motion.div
//         className={cn("h-full px-4 py-4 hidden  md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[300px] flex-shrink-0", className)}
//         animate={{
//           width: animate ? (open ? "300px" : "60px") : "300px",
//         }}
//         onMouseEnter={() => setOpen(true)}
//         onMouseLeave={() => setOpen(false)}
//         {...props}
//       >
//         {children}
//       </motion.div>
//     </>
//   );
// };

// export const MobileSidebar = ({ className, children, ...props }: React.ComponentProps<"div">) => {
//   const { open, setOpen } = useSidebar();
//   return (
//     <>
//       <div className={cn("h-10 px-4 py-4 flex flex-row md:hidden  items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full")} {...props}>
//         <div className="flex justify-end z-20 w-full">
//           <IconMenu2 className="text-neutral-800 dark:text-neutral-200" onClick={() => setOpen(!open)} />
//         </div>
//         <AnimatePresence>
//           {open && (
//             <motion.div
//               initial={{ x: "-100%", opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: "-100%", opacity: 0 }}
//               transition={{
//                 duration: 0.3,
//                 ease: "easeInOut",
//               }}
//               className={cn("fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between", className)}
//             >
//               <div className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200" onClick={() => setOpen(!open)}>
//                 <IconX />
//               </div>
//               {children}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </>
//   );
// };

// export const SidebarLink = ({ link, className, ...props }: { link: Links; className?: string; props?: LinkProps }) => {
//   const { open, animate } = useSidebar();
//   return (
//     <Link href={link.href} className={cn("flex items-center justify-start gap-2  group/sidebar py-2", className)} {...props}>
//       {link.icon}

//       <motion.span
//         animate={{
//           display: animate ? (open ? "inline-block" : "none") : "inline-block",
//           opacity: animate ? (open ? 1 : 0) : 1,
//         }}
//         className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
//       >
//         {link.label}
//       </motion.span>
//     </Link>
//   );
// };
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../../public/img/vidi_logo.png";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="min-w-72">
      <div className="flex h-screen flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">
          <Image src={logo} alt="Logo Vidi" className="w-36 ml-3" />

          <ul className="mt-6 space-y-1">
            <li>
              <Link href="/dashboard" className={`block rounded-lg px-4 py-2 text-sm font-medium ${pathname === "/dashboard" ? "bg-gray-100 text-gray-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}`}>
                Dashboard
              </Link>
            </li>

            <li>
              <Link href="/dashboard/create-post" className={`block rounded-lg px-4 py-2 text-sm font-medium ${pathname === "/dashboard/create-post" ? "bg-gray-100 text-gray-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}`}>
                Create Post
              </Link>
            </li>

            <li>
              <Link href="#" className={`block rounded-lg px-4 py-2 text-sm font-medium ${pathname === "#" ? "bg-gray-100 text-gray-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}`}>
                Setting
              </Link>
            </li>

            <li>
              <Link href="#" className={`block rounded-lg px-4 py-2 text-sm font-medium ${pathname === "#" ? "bg-gray-100 text-gray-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}`}>
                Logout
              </Link>
            </li>
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
            <img alt="" src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" className="size-10 rounded-full object-cover" />

            <div>
              <p className="text-xs">
                <strong className="block font-medium">Eric Frusciante</strong>

                <span> eric@frusciante.com </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
