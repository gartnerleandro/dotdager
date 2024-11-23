"use client";
import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

import "./PromoModal.css";

const PromoModal: React.FC = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  function handleCloseModal(event: MouseEvent) {
    if (modalRef.current) {
      const rect = modalRef.current.getBoundingClientRect();
      const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
      
      if (!isInDialog) {
        modalRef.current.close();
      }
    }
  }

  useEffect(() => {
    const showModal = () => {
      if (modalRef.current) {
        modalRef.current.showModal();

        modalRef.current.addEventListener('click', handleCloseModal);
      }
    }

    setTimeout(showModal, 40000);

    return () => {
      if (modalRef.current) {
        modalRef.current.removeEventListener('click', handleCloseModal);
      }
    }
  }, []);
  
  const handleClose = () => {
    if (modalRef.current) {
      modalRef.current.close();
      modalRef.current.removeEventListener('click', handleCloseModal);
    }
  }

  return (
    <dialog className="promo-modal" ref={modalRef}>
      <button className="close" onClick={handleClose}>
        <X />
      </button>
      <h4>¿Te gusta la web?</h4>
      <div className="promo-body">
        <img src="/promo.webp" alt="dager comiendo pan" width="128" height="128" />
        <div className="promo-content">
          <p className="promo-code">Utilizá el código <strong>DROGGER</strong> y llevate ESTA con un 100% de descuento.</p>
          <p className="promo-sponsor">Espacio no patrocinado por fiverr.*</p>
        </div>
      </div>
    </dialog>
  )
};

export default PromoModal;