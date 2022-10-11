import { createContext, ReactNode, useState } from "react";

type MobileMenuContextProps = {
	children: ReactNode;
};

type MobileMenuContextType = {
	mobileMenu: boolean;
	updateMobileMenu: (value: boolean) => void;
};

export const MobileMenuContext = createContext<MobileMenuContextType>(
	{} as MobileMenuContextType
);

export const MobileMenuContextProvider = ({ children }: MobileMenuContextProps) => {
	const [mobileMenu, setMobileMenu] = useState(false);

	const updateMobileMenu = (value: boolean) => {
		setMobileMenu(value);
	};
    return (
        <MobileMenuContext.Provider
            value={{
                mobileMenu,
                updateMobileMenu
            }}
        >
            {children}
        </MobileMenuContext.Provider>
    )
};