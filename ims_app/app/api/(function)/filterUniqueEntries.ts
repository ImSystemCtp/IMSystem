export function filterUniqueEntries(arr: registerToReport[]): registerToReport[] {
    const uniqueEntries = arr.reduce((unique: Map<string, registerToReport>, entry) => {
        const key = `${entry.reg_folio}-${entry.reg_tomo}-${entry.reg_asiento}`;
        if (!unique.has(key)) {
            unique.set(key, entry);
        }
        return unique;
    }, new Map<string, registerToReport>());

    return Array.from(uniqueEntries.values());
}
