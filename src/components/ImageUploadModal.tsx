import React, { useState, useRef, useEffect } from 'react';
import { X, Upload, Link as LinkIcon, RotateCcw, Check } from 'lucide-react';

interface ImageUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  currentUrl: string;
  defaultUrl: string;
  onSave: (newUrl: string) => void;
}

export const ImageUploadModal: React.FC<ImageUploadModalProps> = ({
  isOpen,
  onClose,
  title,
  currentUrl,
  defaultUrl,
  onSave,
}) => {
  const [urlInput, setUrlInput] = useState('');
  const [previewUrl, setPreviewUrl] = useState(currentUrl);
  const [activeTab, setActiveTab] = useState<'upload' | 'url'>('upload');
  const [dragOver, setDragOver] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPreviewUrl(currentUrl);
    setUrlInput('');
    setSavedNotice(false);
  }, [currentUrl, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPreviewUrl(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPreviewUrl(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyUrl = () => {
    if (urlInput.trim()) {
      setPreviewUrl(urlInput.trim());
    }
  };

  const handleReset = () => {
    setPreviewUrl(defaultUrl);
    setUrlInput('');
  };

  const handleConfirmSave = () => {
    onSave(previewUrl);
    setSavedNotice(true);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="upload-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#0e131f] border border-white/10 rounded-2xl p-6 shadow-2xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <h3 id="upload-modal-title" className="text-lg font-semibold text-white font-display">
              Customize Photo
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">{title}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 p-1 bg-white/[0.04] rounded-lg mt-5 mb-4 text-xs font-medium">
          <button
            onClick={() => setActiveTab('upload')}
            className={`flex-1 py-1.5 px-3 rounded-md transition-colors ${
              activeTab === 'upload'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Upload File
          </button>
          <button
            onClick={() => setActiveTab('url')}
            className={`flex-1 py-1.5 px-3 rounded-md transition-colors ${
              activeTab === 'url'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Paste Image URL
          </button>
        </div>

        {/* Preview and Input */}
        <div className="space-y-4">
          <div className="relative aspect-[16/10] bg-black/40 rounded-xl overflow-hidden border border-white/10 flex items-center justify-center">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="text-xs text-slate-500">No image selected</div>
            )}
            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[11px] text-slate-300 font-mono">
              Live Preview
            </div>
          </div>

          {activeTab === 'upload' ? (
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                dragOver
                  ? 'border-blue-500 bg-blue-500/10'
                  : 'border-white/15 hover:border-white/30 bg-white/[0.02]'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <Upload className="w-6 h-6 mx-auto mb-2 text-blue-400" />
              <p className="text-sm font-medium text-white">Click or drag image file here</p>
              <p className="text-xs text-slate-400 mt-1">Supports PNG, JPG, WebP, SVG</p>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://example.com/photo.jpg"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="flex-1 bg-white/[0.05] border border-white/15 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={handleApplyUrl}
                  className="px-3 py-2 bg-white/10 hover:bg-white/15 text-white rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5"
                >
                  <LinkIcon className="w-3.5 h-3.5" />
                  Load
                </button>
              </div>
              <p className="text-[11px] text-slate-400">
                Paste any direct web image URL to preview and save.
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-5 mt-5 border-t border-white/10">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset to Default
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirmSave}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
            >
              {savedNotice ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  Saved!
                </>
              ) : (
                'Save Photo'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
