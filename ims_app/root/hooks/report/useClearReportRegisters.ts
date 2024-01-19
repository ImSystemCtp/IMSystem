"use client"
import { useEffect } from "react";
import {useReportStore } from "@/root/zustand";
export const useClearReportRegisters= () => {
    const { reportRegister } = useReportStore((state) => ({ reportRegister: state.reportRegister }));
    const { clearReportRegister } = useReportStore();
    useEffect(() => {
        if (reportRegister.length > 0) {
            clearReportRegister();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}