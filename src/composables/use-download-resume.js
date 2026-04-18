import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

export function useDownloadResume() {
  const { locale } = useI18n();

  const resumeFile = computed(() => {
    switch (locale.value) {
      case 'en':
        return '/pdfs/resume-en.pdf';
      case 'es':
        return '/pdfs/resume-es.pdf';
      default:
        return '/pdfs/resume-en.pdf';
    }
  });

  return { resumeFile };
}
