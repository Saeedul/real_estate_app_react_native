import { createContext } from "react";

interface User {
    $id: string;
    name: string;
    email: string;
    avatar: string;
}

interface GlobalContextType {
    isLoggedIn: boolean;
    user: User | null;
    loading: boolean;
    refetch: (newParams?: Record<string, string | number>) => Promise<void>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// the goal of this component is not to render any data, but to wrap the screens with the GlobalContext.Provider which then has acess to the values that you want to keep
export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    return <GlobalContext.Provider value={undefined}>{children}
    </GlobalContext.Provider>;
}