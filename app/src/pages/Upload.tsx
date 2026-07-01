import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  UploadCloud, Video, AlertCircle, Check, X, ChevronRight,
  Camera, Smartphone, Lightbulb, Ruler, Timer, RotateCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function UploadPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [faceOnFile, setFaceOnFile] = useState<File | null>(null);
  const [dtlFile, setDtlFile] = useState<File | null>(null);
  const [faceOnPreview, setFaceOnPreview] = useState<string>('');
  const [dtlPreview, setDtlPreview] = useState<string>('');
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showGuidelines, setShowGuidelines] = useState(false);
  const faceOnRef = useRef<HTMLInputElement>(null);
  const dtlRef = useRef<HTMLInputElement>(null);

  const creditsRemaining = user
    ? user.monthlyCreditsTotal - user.monthlyCreditsUsed + user.bonusCredits
    : 0;

  const handleFileSelect = (type: 'faceon' | 'dtl', file: File) => {
    const url = URL.createObjectURL(file);
    if (type === 'faceon') {
      setFaceOnFile(file);
      setFaceOnPreview(url);
    } else {
      setDtlFile(file);
      setDtlPreview(url);
    }
  };

  const clearFile = (type: 'faceon' | 'dtl') => {
    if (type === 'faceon') {
      setFaceOnFile(null);
      setFaceOnPreview('');
    } else {
      setDtlFile(null);
      setDtlPreview('');
    }
  };

  const handleSubmit = async () => {
    if (!faceOnFile || !dtlFile) return;
    setUploading(true);
    // Simulate upload and analysis
    for (let i = 0; i <= 100; i += 5) {
      setProgress(i);
      await new Promise((r) => setTimeout(r, 150));
    }
    // Navigate to the latest analysis (mock)
    navigate('/analysis/sw1');
  };

  const canSubmit = faceOnFile && dtlFile && creditsRemaining > 0;

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-4xl space-y-6"
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold">New Swing Analysis</h1>
        <p className="mt-1 text-sm text-slate-400">
          Upload videos from two angles for a complete MORAD analysis
        </p>
      </div>

      {/* Credit warning */}
      {creditsRemaining <= 0 && (
        <Card className="border-red-500/30 bg-red-500/5">
          <CardContent className="flex items-center gap-3 p-4">
            <AlertCircle className="h-5 w-5 text-red-400 shrink-0" />
            <p className="text-sm text-red-400">
              You've used all your credits. Purchase more or wait for your monthly reset.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Credit badge */}
      <div className="flex items-center justify-center gap-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm">
          <span className="text-slate-400">Credits available:</span>
          <span className="font-bold text-emerald-400">{creditsRemaining}</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-500">1 credit per analysis</span>
        </div>
      </div>

      {/* Recording Guidelines Toggle */}
      <div className="text-center">
        <Button
          variant="ghost"
          onClick={() => setShowGuidelines(!showGuidelines)}
          className="text-sm text-emerald-400 hover:text-emerald-300"
        >
          {showGuidelines ? 'Hide' : 'Show'} Recording Guidelines
          <ChevronRight className={`ml-1 h-4 w-4 transition-transform ${showGuidelines ? 'rotate-90' : ''}`} />
        </Button>
      </div>

      <AnimatePresence>
        {showGuidelines && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <Card className="border-white/10 bg-white/5">
              <CardContent className="p-5">
                <h3 className="font-semibold text-white mb-4">How to Record Your Swing</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: Camera, title: 'Camera Position', desc: 'Place camera at waist height, 10-12 feet from golfer' },
                    { icon: Smartphone, title: 'Slow Motion', desc: 'Record at 240fps (ideal) or 120fps (minimum)' },
                    { icon: Lightbulb, title: 'Lighting', desc: 'Use outdoor natural light or well-lit indoor space' },
                    { icon: Ruler, title: 'Framing', desc: 'Full body from head to feet, club visible throughout' },
                    { icon: Timer, title: 'Swing Speed', desc: 'Use your normal, comfortable swing speed' },
                    { icon: RotateCw, title: 'Tripod', desc: 'Use a tripod for stable, steady footage' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3 rounded-lg bg-white/5 p-3">
                      <item.icon className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-white">{item.title}</p>
                        <p className="text-xs text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-lg bg-emerald-500/10 p-3">
                  <p className="text-xs text-emerald-400">
                    <strong>Face-On View:</strong> Camera directly in front of golfer, perpendicular to target line.
                    <br />
                    <strong>Down-the-Line View:</strong> Camera behind golfer, directly on the target line.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Upload Areas */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Face-On Upload */}
        <Card className={`border-2 transition-colors ${faceOnFile ? 'border-emerald-500/30' : 'border-dashed border-white/10'} bg-white/5`}>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Video className="h-5 w-5 text-emerald-400" />
              <h3 className="font-semibold">Face-On View</h3>
              {faceOnFile && <Check className="h-4 w-4 text-emerald-400 ml-auto" />}
            </div>

            {faceOnPreview ? (
              <div className="relative">
                <img src={faceOnPreview} alt="Face-on preview" className="w-full rounded-lg object-cover" />
                <button
                  onClick={() => clearFile('faceon')}
                  className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 hover:bg-red-600"
                >
                  <X className="h-3 w-3 text-white" />
                </button>
                <p className="mt-2 text-xs text-slate-400 truncate">{faceOnFile?.name}</p>
              </div>
            ) : (
              <div
                onClick={() => faceOnRef.current?.click()}
                className="flex cursor-pointer flex-col items-center justify-center rounded-lg bg-white/5 py-12 transition-colors hover:bg-white/[0.07]"
              >
                <UploadCloud className="h-10 w-10 text-slate-500" />
                <p className="mt-3 text-sm font-medium text-slate-300">Click to upload</p>
                <p className="mt-1 text-xs text-slate-500">Face-on view (front)</p>
                <p className="text-xs text-slate-600">MP4, MOV, or AVI</p>
              </div>
            )}
            <input
              ref={faceOnRef}
              type="file"
              accept="video/*,image/*"
              className="hidden"
              onChange={(e) => e.target.files?.[0] && handleFileSelect('faceon', e.target.files[0])}
            />
          </CardContent>
        </Card>

        {/* Down-the-Line Upload */}
        <Card className={`border-2 transition-colors ${dtlFile ? 'border-emerald-500/30' : 'border-dashed border-white/10'} bg-white/5`}>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Video className="h-5 w-5 text-blue-400" />
              <h3 className="font-semibold">Down-the-Line View</h3>
              {dtlFile && <Check className="h-4 w-4 text-emerald-400 ml-auto" />}
            </div>

            {dtlPreview ? (
              <div className="relative">
                <img src={dtlPreview} alt="DTL preview" className="w-full rounded-lg object-cover" />
                <button
                  onClick={() => clearFile('dtl')}
                  className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 hover:bg-red-600"
                >
                  <X className="h-3 w-3 text-white" />
                </button>
                <p className="mt-2 text-xs text-slate-400 truncate">{dtlFile?.name}</p>
              </div>
            ) : (
              <div
                onClick={() => dtlRef.current?.click()}
                className="flex cursor-pointer flex-col items-center justify-center rounded-lg bg-white/5 py-12 transition-colors hover:bg-white/[0.07]"
              >
                <UploadCloud className="h-10 w-10 text-slate-500" />
                <p className="mt-3 text-sm font-medium text-slate-300">Click to upload</p>
                <p className="mt-1 text-xs text-slate-500">Down-the-line view (behind)</p>
                <p className="text-xs text-slate-600">MP4, MOV, or AVI</p>
              </div>
            )}
            <input
              ref={dtlRef}
              type="file"
              accept="video/*,image/*"
              className="hidden"
              onChange={(e) => e.target.files?.[0] && handleFileSelect('dtl', e.target.files[0])}
            />
          </CardContent>
        </Card>
      </div>

      {/* Submit */}
      <div className="flex flex-col items-center gap-4">
        {uploading ? (
          <div className="w-full max-w-md space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400">Analyzing your swing...</span>
              <span className="text-emerald-400">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2 bg-white/10" />
            <p className="text-center text-xs text-slate-500">
              Extracting frames at P1-P10 positions and running MORAD analysis
            </p>
          </div>
        ) : (
          <Button
            size="lg"
            disabled={!canSubmit}
            onClick={handleSubmit}
            className="h-12 bg-emerald-500 px-8 text-lg font-semibold text-white hover:bg-emerald-600 disabled:opacity-50"
          >
            Analyze My Swing
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        )}
        {!canSubmit && creditsRemaining > 0 && (
          <p className="text-sm text-slate-500">Upload both angles to continue</p>
        )}
      </div>
    </motion.div>
  );
}
