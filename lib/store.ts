export interface UserProfile {
    name: string;
    email: string;
    isLoggedIn: boolean;
    isPro: boolean;
    createdAt: string;
}

export interface BrandProfile {
    companyName: string;
    industry: string;
    tone: string;
    targetAudience: string;
    keyDifferentiators: string;
    website: string;
}

export interface SavedProject {
    id: string;
    toolSlug: string;
    toolName: string;
    toolIcon: string;
    formData: Record<string, string>;
    result: string;
    createdAt: string;
    title: string;
}

const KEYS = {
    user: "biztoolbox_user",
    brand: "biztoolbox_brand",
    projects: "biztoolbox_projects",
    usageCount: "biztoolbox_usage",
    usageDate: "biztoolbox_usage_date",
};

function isBrowser() {
    return typeof window !== "undefined";
}

export function getUser(): UserProfile | null {
    if (!isBrowser()) return null;
    const data = localStorage.getItem(KEYS.user);
    return data ? JSON.parse(data) : null;
}

export function saveUser(user: UserProfile) {
    if (!isBrowser()) return;
    localStorage.setItem(KEYS.user, JSON.stringify(user));
    window.dispatchEvent(new Event("biztoolbox_auth_change"));
}

export function logout() {
    if (!isBrowser()) return;
    localStorage.removeItem(KEYS.user);
    window.dispatchEvent(new Event("biztoolbox_auth_change"));
}

export function getBrandProfile(): BrandProfile | null {
    if (!isBrowser()) return null;
    const data = localStorage.getItem(KEYS.brand);
    return data ? JSON.parse(data) : null;
}

export function saveBrandProfile(brand: BrandProfile) {
    if (!isBrowser()) return;
    localStorage.setItem(KEYS.brand, JSON.stringify(brand));
}

export function getProjects(): SavedProject[] {
    if (!isBrowser()) return [];
    const data = localStorage.getItem(KEYS.projects);
    return data ? JSON.parse(data) : [];
}

export function saveProject(project: Omit<SavedProject, "id" | "createdAt">) {
    if (!isBrowser()) return;
    const projects = getProjects();
    const newProject: SavedProject = {
          ...project,
          id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
          createdAt: new Date().toISOString(),
    };
    projects.unshift(newProject);
    localStorage.setItem(KEYS.projects, JSON.stringify(projects));
    return newProject;
}

export function deleteProject(id: string) {
    if (!isBrowser()) return;
    const projects = getProjects().filter((p) => p.id !== id);
    localStorage.setItem(KEYS.projects, JSON.stringify(projects));
}

export function getUsageToday(): number {
    if (!isBrowser()) return 0;
    const today = new Date().toISOString().split("T")[0];
    const storedDate = localStorage.getItem(KEYS.usageDate);
    if (storedDate !== today) {
          localStorage.setItem(KEYS.usageDate, today);
          localStorage.setItem(KEYS.usageCount, "0");
          return 0;
    }
    return parseInt(localStorage.getItem(KEYS.usageCount) || "0", 10);
}

export function incrementUsage() {
    if (!isBrowser()) return;
    const today = new Date().toISOString().split("T")[0];
    localStorage.setItem(KEYS.usageDate, today);
    const current = getUsageToday();
    localStorage.setItem(KEYS.usageCount, (current + 1).toString());
}

export function canUseFreeTier(): boolean {
    const user = getUser();
    if (user?.isPro) return true;
    return getUsageToday() < 3;
}
