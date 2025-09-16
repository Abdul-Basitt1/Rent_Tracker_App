import { StyleSheet } from 'react-native';
import { hp, wp } from '../../../Components/ResponsiveComponent';

// Subtle, modern palette (dark base + warm accent)
export const PALETTE = {
    bg: '#0F172A',          // deep slate
    card: '#111B2E',        // slightly lighter than bg
    cardBorder: '#1E2A44',  // thin outline
    text: '#E5E7EB',        // primary text
    subtext: '#9CA3AF',     // secondary text
    accent: '#FF5E7A',      // warm coral accent
    accentText: '#0B1220',  // dark text on accent
    dotIdle: '#2C3A54',     // inactive dot
    ghostBtnBg: 'rgba(255,255,255,0.06)',
    ghostBtnBorder: 'rgba(255,255,255,0.10)',
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PALETTE.bg,
        paddingHorizontal: wp(6),
    },

    imageContainer: {
        height: hp(42),
        justifyContent: 'center',
        alignItems: 'center',
    },

    // “Glass” hero card for the image (subtle, not flashy)
    heroCard: {
        width: '100%',
        height: '100%',
        borderRadius: wp(5),
        backgroundColor: PALETTE.card,
        borderWidth: 1,
        borderColor: PALETTE.cardBorder,
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp(4),
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        elevation: 6,
    },

    heroImage: {
        width: '90%',
        height: '90%',
    },

    title: {
        color: PALETTE.text,
        fontSize: wp(6.5),
        fontWeight: '800',
        letterSpacing: 0.2,
        textAlign: 'center',
        marginTop: hp(3),
    },

    subtitle: {
        color: PALETTE.subtext,
        fontSize: wp(3.8),
        lineHeight: wp(5.4),
        textAlign: 'center',
        marginTop: hp(1.5),
        paddingHorizontal: wp(4),
    },

    // Bottom nav buttons
    navBtn: {
        paddingVertical: hp(1.6),
        paddingHorizontal: wp(5),
        borderRadius: wp(3),
        marginHorizontal: wp(1.5),
    },
    navBtnGhost: {
        backgroundColor: PALETTE.ghostBtnBg,
        borderWidth: 1,
        borderColor: PALETTE.ghostBtnBorder,
    },
    navBtnPrimary: {
        backgroundColor: PALETTE.accent,
    },

    navText: {
        fontWeight: '800',
        letterSpacing: 0.2,
    },
    navTextGhost: {
        color: PALETTE.text,
    },
    navTextPrimary: {
        color: PALETTE.accentText,
    },
});
