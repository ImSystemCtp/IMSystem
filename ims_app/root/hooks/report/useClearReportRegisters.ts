"use client"
import { useEffect } from "react";
import { useLawStore, useLoadingStore, useReportStore } from "@/root/zustand";
export const useClearReportRegisters= () => {
    const { reportRegister, clearReportRegister } = useReportStore();
    useEffect(() => {
        if (reportRegister.length > 0) {
            clearReportRegister();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}